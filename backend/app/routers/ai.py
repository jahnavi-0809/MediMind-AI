from fastapi import (
    APIRouter,
    UploadFile,
    File,
    HTTPException,
    Form,
    Depends,
)

from sqlalchemy.orm import Session

from app.services.llm_service import ask_medimind
from app.services.pdf_service import extract_text_from_pdf
from app.services.auth_service import get_current_user

from app.database import get_db
from app.models.user import User
from app.models.activity import Activity


router = APIRouter()


def detect_feature(question: str) -> str:
    """
    Identify which MediMind feature generated the /ask request.
    """

    question_lower = question.lower()

    if "my symptoms are:" in question_lower:
        return "Symptom Checker"

    if "provide educational information about the medicine:" in question_lower:
        return "Medicine Information"

    if "user's healthcare question:" in question_lower:
        return "AI Health Chat"

    return "AI Assistant"


@router.get("/ask")
def ask(
    question: str,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if not question.strip():
        raise HTTPException(
            status_code=400,
            detail="Question cannot be empty."
        )

    try:
        answer = ask_medimind(question)

        feature = detect_feature(question)

        activity = Activity(
            user_id=current_user.id,
            feature=feature,
            question=question,
            response=answer,
        )

        db.add(activity)
        db.commit()

        return {
            "question": question,
            "answer": answer
        }

    except HTTPException:
        raise

    except Exception as e:
        db.rollback()

        print("AI ERROR:", repr(e))

        raise HTTPException(
            status_code=500,
            detail="Unable to process your question."
        )


@router.post("/analyze-report")
async def analyze_report(
    file: UploadFile = File(...),
    language: str = Form("English"),
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if not file.filename:
        raise HTTPException(
            status_code=400,
            detail="No file was uploaded."
        )

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are supported."
        )

    try:
        file_bytes = await file.read()

        if not file_bytes:
            raise HTTPException(
                status_code=400,
                detail="Uploaded PDF is empty."
            )

        print(
            f"Received PDF: {file.filename} "
            f"({len(file_bytes)} bytes)"
        )

        try:
            report_text = extract_text_from_pdf(file_bytes)

        except ValueError as e:
            print(
                "PDF VALIDATION ERROR:",
                repr(e)
            )

            raise HTTPException(
                status_code=400,
                detail=str(e)
            )

        except Exception as e:
            print(
                "PDF EXTRACTION ERROR:",
                repr(e)
            )

            raise HTTPException(
                status_code=400,
                detail=(
                    "The uploaded PDF could not be read. "
                    "Please upload a valid PDF document."
                )
            )

        if not report_text.strip():
            raise HTTPException(
                status_code=400,
                detail=(
                    "No readable text was found in this PDF. "
                    "Please upload a text-based medical report."
                )
            )

        print(
            f"Extracted report text: "
            f"{len(report_text)} characters"
        )

        if language.lower() in ["telugu", "te"]:

            language_instruction = """
Respond completely in Telugu language.

Use simple and easy-to-understand Telugu.
The explanation should be understandable to elderly
users who may not know English.

Medical terms can be written in Telugu with the
English medical term in brackets when helpful.

Do not translate medical values incorrectly.
Keep numbers, measurements, test names, and values accurate.
"""

        else:

            language_instruction = """
Respond completely in English.

Use simple and easy-to-understand language.
Keep medical terms clear and understandable.
"""

        prompt = f"""
You are MediMind AI, an AI healthcare assistant.

Analyze the following medical report.

IMPORTANT LANGUAGE REQUIREMENT:

{language_instruction}

Medical Report:
{report_text}

Generate the response using the following structure:

# 📋 Report Summary

Briefly explain what this report is about.

# 🔍 Important Findings

List the important observations from the report.

# ⚠️ Abnormal Values

Mention abnormal values if present.

If no obvious abnormal values are present, clearly state
that no major abnormal values were detected.

# 💊 Health Suggestions

Provide general lifestyle and wellness suggestions only.

Do NOT prescribe medicines.

Do NOT provide medicine dosages.

# 🚨 When to Consult a Doctor

Mention situations where the user should consult
a qualified healthcare professional.

# ⚠️ Disclaimer

Clearly state that this analysis is AI-generated
and is for educational purposes only.

IMPORTANT SAFETY RULES:

- Do not provide a final diagnosis.
- Do not claim to be a doctor.
- Do not prescribe medicines.
- Do not recommend medicine dosages.
- Do not change or invent laboratory values.
- Base the analysis only on the information present
  in the uploaded medical report.
"""

        try:
            analysis = ask_medimind(prompt)

        except Exception as e:
            print(
                "REPORT AI ERROR:",
                repr(e)
            )

            raise HTTPException(
                status_code=500,
                detail="AI could not analyze the medical report."
            )

        activity = Activity(
            user_id=current_user.id,
            feature="Report Analyzer",
            question=f"Medical Report: {file.filename}",
            response=analysis,
        )

        db.add(activity)
        db.commit()

        return {
            "filename": file.filename,
            "language": language,
            "analysis": analysis
        }

    except HTTPException:
        raise

    except Exception as e:
        db.rollback()

        print(
            "REPORT ANALYSIS ERROR:",
            repr(e)
        )

        raise HTTPException(
            status_code=500,
            detail="Failed to analyze the medical report."
        )