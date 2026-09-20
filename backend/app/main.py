from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models.user import User
from app.models.activity import Activity

from app.routers.ai import router as ai_router
from app.routers.auth import router as auth_router
from app.routers.history import router as history_router


# ============================================================
# DATABASE INITIALIZATION
# ============================================================

Base.metadata.create_all(bind=engine)


# ============================================================
# FASTAPI APPLICATION
# ============================================================

app = FastAPI(
    title="MediMind AI",
    description="AI-powered healthcare assistant",
    version="1.0.0"
)


# ============================================================
# ROUTERS
# ============================================================

app.include_router(ai_router)
app.include_router(auth_router)
app.include_router(history_router)


# ============================================================
# CORS CONFIGURATION
# ============================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ============================================================
# ROOT ENDPOINT
# ============================================================

@app.get("/")
def home():
    return {
        "message": "Welcome to MediMind AI Backend 🚀"
    }