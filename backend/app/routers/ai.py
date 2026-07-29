from fastapi import APIRouter
from app.services.llm_service import ask_medimind

router = APIRouter()

@router.get("/ask")
def ask(question: str):
    answer = ask_medimind(question)
    return {
        "question": question,
        "answer": answer
    }