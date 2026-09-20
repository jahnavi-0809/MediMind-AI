from datetime import timezone

from fastapi import APIRouter, Depends
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.user import User
from app.models.activity import Activity
from app.services.auth_service import get_current_user


router = APIRouter(
    prefix="/history",
    tags=["History"]
)


def clean_activity_question(question: str) -> str:
    """
    Return only the actual user question/request.

    Older activity records may contain the complete AI prompt,
    including language instructions and safety instructions.
    This function removes those internal instructions before
    showing the activity to the user.
    """

    if not question:
        return ""


    # ---------------------------------------------------------
    # AI Health Chat
    # ---------------------------------------------------------

    chat_marker = "User's healthcare question:"

    if chat_marker in question:

        cleaned = question.split(
            chat_marker,
            1
        )[1]

        stop_markers = [
            "Respond completely in Telugu language.",
            "Respond completely in English.",
            "Provide educational health information only.",
        ]

        for marker in stop_markers:

            if marker in cleaned:

                cleaned = cleaned.split(
                    marker,
                    1
                )[0]

        return cleaned.strip()


    # ---------------------------------------------------------
    # Symptom Checker
    # ---------------------------------------------------------

    symptom_marker = "My symptoms are:"

    if symptom_marker in question:

        cleaned = question.split(
            symptom_marker,
            1
        )[1]

        stop_markers = [
            "Respond completely in Telugu language.",
            "Respond completely in English.",
            "Provide educational health information only.",
        ]

        for marker in stop_markers:

            if marker in cleaned:

                cleaned = cleaned.split(
                    marker,
                    1
                )[0]

        return cleaned.strip()


    # ---------------------------------------------------------
    # Medicine Information
    # ---------------------------------------------------------

    medicine_marker = (
        "Provide educational information about the medicine:"
    )

    if medicine_marker in question:

        cleaned = question.split(
            medicine_marker,
            1
        )[1]

        stop_markers = [
            "Respond completely in Telugu language.",
            "Respond completely in English.",
            "Include:",
            "Do not prescribe",
            "Do not recommend",
            "Do not provide a final",
        ]

        for marker in stop_markers:

            if marker in cleaned:

                cleaned = cleaned.split(
                    marker,
                    1
                )[0]

        return cleaned.strip()


    # ---------------------------------------------------------
    # Report Analyzer
    # ---------------------------------------------------------

    if question.startswith("Medical Report:"):

        return question.strip()


    # ---------------------------------------------------------
    # Already clean question
    # ---------------------------------------------------------

    return question.strip()


@router.get("")
def get_history(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):

    activities = (
        db.query(Activity)
        .filter(
            Activity.user_id == current_user.id
        )
        .order_by(
            Activity.created_at.desc()
        )
        .all()
    )


    formatted_activities = []


    for activity in activities:

        created_at = activity.created_at


        # SQLite may return UTC datetime
        # without timezone information.
        # Explicitly mark it as UTC.

        if created_at.tzinfo is None:

            created_at = created_at.replace(
                tzinfo=timezone.utc
            )


        clean_question = clean_activity_question(
            activity.question
        )


        formatted_activities.append(
            {
                "id": activity.id,

                "feature": activity.feature,

                "question": clean_question,

                "response": activity.response,

                "created_at": created_at.isoformat(),
            }
        )


    return {
        "user_id": current_user.id,

        "count": len(
            formatted_activities
        ),

        "activities": formatted_activities,
    }


@router.get("/stats")
def get_history_stats(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    """
    Return real activity statistics for the logged-in user.

    These values are calculated directly from the activities
    stored in the database.
    """

    user_id = current_user.id


    total_activities = (
        db.query(func.count(Activity.id))
        .filter(
            Activity.user_id == user_id
        )
        .scalar()
        or 0
    )


    reports_analyzed = (
        db.query(func.count(Activity.id))
        .filter(
            Activity.user_id == user_id,
            Activity.feature == "Report Analyzer"
        )
        .scalar()
        or 0
    )


    symptom_checks = (
        db.query(func.count(Activity.id))
        .filter(
            Activity.user_id == user_id,
            Activity.feature == "Symptom Checker"
        )
        .scalar()
        or 0
    )


    ai_chats = (
        db.query(func.count(Activity.id))
        .filter(
            Activity.user_id == user_id,
            Activity.feature == "AI Health Chat"
        )
        .scalar()
        or 0
    )


    medicine_searches = (
        db.query(func.count(Activity.id))
        .filter(
            Activity.user_id == user_id,
            Activity.feature == "Medicine Information"
        )
        .scalar()
        or 0
    )


    return {
        "user_id": user_id,
        "total_activities": total_activities,
        "reports_analyzed": reports_analyzed,
        "symptom_checks": symptom_checks,
        "ai_chats": ai_chats,
        "medicine_searches": medicine_searches,
    }