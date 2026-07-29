from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.ai import router as ai_router

app = FastAPI()
app.include_router(ai_router)

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to MediMind AI Backend 🚀"
    }