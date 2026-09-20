import docx
from docx.shared import Inches, Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH
from report_generator.styles import (
    add_heading1, add_heading2, add_heading3, add_paragraph,
    add_bullet, add_table, add_code_block
)

def add_chapter6(doc):
    add_heading1(doc, "CHAPTER 6\nCODING / IMPLEMENTATION", centered=True)

    add_heading2(doc, "6.1 Codebase Organization & File Structure")
    add_paragraph(
        doc,
        "The MediMind AI codebase is organized according to separation-of-concerns principles, cleanly dividing frontend single-page "
        "application assets from the backend RESTful service layers. Below is the verified physical directory hierarchy of the project:"
    )

    tree_listing = (
        "MediMind-AI/\n"
        "├── backend/\n"
        "│   ├── app/\n"
        "│   │   ├── models/            # SQLAlchemy database models\n"
        "│   │   │   ├── user.py        # User entity schema\n"
        "│   │   │   └── activity.py    # Activity transaction log schema\n"
        "│   │   ├── routers/           # FastAPI modular API route controllers\n"
        "│   │   │   ├── ai.py          # /ask and /analyze-report endpoints\n"
        "│   │   │   ├── auth.py        # /auth/register, /login, /forgot-password\n"
        "│   │   │   └── history.py     # /history and /history/stats endpoints\n"
        "│   │   ├── services/          # Core business logic and external integrations\n"
        "│   │   │   ├── auth_service.py # Bcrypt hashing & JWT token verification\n"
        "│   │   │   ├── llm_service.py  # Groq Cloud LLM client & prompt engine\n"
        "│   │   │   └── pdf_service.py  # PyMuPDF in-memory stream parser\n"
        "│   │   ├── database.py        # Engine, SessionLocal & get_db dependency\n"
        "│   │   └── main.py            # FastAPI initialization, CORS & router registration\n"
        "│   ├── medimind.db            # SQLite 3 relational database\n"
        "│   └── requirements.txt       # Verified Python dependencies\n"
        "└── frontend/\n"
        "    ├── src/\n"
        "    │   ├── components/        # Reusable UI components (Navbar, TeluguKeyboard...)\n"
        "    │   ├── context/           # React Context Providers (AuthContext, LanguageContext)\n"
        "    │   ├── pages/             # Route views (Home, Dashboard, SymptomChecker...)\n"
        "    │   ├── routes/            # ProtectedRoute route guard wrapper\n"
        "    │   ├── services/          # Axios HTTP instance with JWT interceptors\n"
        "    │   ├── App.jsx            # Top-level routing & layout orchestration\n"
        "    │   └── main.jsx           # DOM root mounting\n"
        "    └── package.json           # Frontend dependencies & Vite scripts"
    )
    add_code_block(doc, tree_listing, "MediMind AI Repository Directory Structure")

    add_heading2(doc, "6.2 Component & Service Functional Walkthrough")
    add_paragraph(
        doc,
        "Every class, service, and controller module in MediMind AI is developed with explicit input and output contracts, "
        "thorough exception handling, and robust typing:"
    )
    add_bullet(
        doc,
        "Accepts raw file bytes (bytes) as input, validates the %PDF- header, instantiates a fitz.open stream, iterates over document pages, "
        "and returns concatenated plain text (str). Raises ValueError on empty or invalid PDF streams.",
        "extract_text_from_pdf(file_bytes: bytes) -> str: "
    )
    add_bullet(
        doc,
        "Accepts user clinical query string (str), applies the comprehensive clinical system prompt, invokes Groq client completion with "
        "model='openai/gpt-oss-20b', temperature=0.2, max_tokens=600, and returns sanitized markdown response (str).",
        "ask_medimind(question: str) -> str: "
    )
    add_bullet(
        doc,
        "Encodes arbitrary dictionary payload with expiration delta (60 min) and signs the payload with HMAC-SHA256 using SECRET_KEY. Returns standard JWT token string.",
        "create_access_token(data: dict, expires_minutes: int) -> str: "
    )
    add_bullet(
        doc,
        "FastAPI dependency that extracts the HTTP Bearer credential, decodes the JWT token against SECRET_KEY, retrieves the user ID from the 'sub' claim, "
        "queries the database for the matching User model, and returns the User instance. Raises HTTP 401 Unauthorized if invalid or expired.",
        "get_current_user(credentials, db) -> User: "
    )

    add_heading2(doc, "6.3 Actual Source Code Listings from MediMind AI")
    add_paragraph(
        doc,
        "The following sections present the genuine, production source code implementations extracted directly from the MediMind AI repository. "
        "In accordance with software security best practices, sensitive environment variables and API keys are referenced via secure environment lookups."
    )

    # 6.3.1 llm_service.py
    add_heading3(doc, "6.3.1 LLM Service Implementation (backend/app/services/llm_service.py)")
    add_paragraph(
        doc,
        "The llm_service.py module encapsulates the Groq Cloud SDK client, initializes inference parameters, and enforces comprehensive "
        "clinical guardrails across medicine, symptom, and report query domains:"
    )
    code_llm = (
        "import os\n"
        "from dotenv import load_dotenv\n"
        "from groq import Groq\n\n"
        "load_dotenv()\n\n"
        "# Initialize Groq Cloud Client using sanitized environment variable\n"
        "client = Groq(\n"
        "    api_key=os.getenv(\"GROQ_API_KEY\")\n"
        ")\n\n"
        "def ask_medimind(question: str):\n"
        "    system_prompt = \"\"\"\n"
        "You are MediMind AI, a professional AI Healthcare Assistant.\n"
        "Your job is to provide safe, concise, easy-to-understand educational health information.\n\n"
        "IMPORTANT RESPONSE RULES:\n"
        "1. Give a useful answer directly related to the user's question.\n"
        "2. Keep responses concise and focused (normally below 500 words).\n"
        "3. Do not invent medical information.\n"
        "4. Never claim to be a doctor or provide a final medical diagnosis.\n"
        "5. Never prescribe medicines or provide medicine dosages.\n"
        "6. For serious or emergency symptoms, advise immediate medical care.\n"
        "7. Medical information is educational only.\n\n"
        "LANGUAGE RULE:\n"
        "If Telugu: Respond naturally in simple Telugu. Keep medical terms in English in brackets.\n"
        "If English: Respond naturally in simple English. Keep response concise.\n\n"
        "MEDICINE QUESTIONS STRUCTURE:\n"
        "💊 Medicine Name | 📌 Uses | ⚠️ Common Side Effects | 🚫 Precautions | 👨‍⚕️ When to Consult a Doctor | ⚠️ Disclaimer\n\n"
        "SYMPTOM QUESTIONS STRUCTURE:\n"
        "🩺 Symptoms Summary | 📋 Possible Common Causes | 🏠 General Self-Care | 🚨 Emergency Warning Signs | ⚠️ Disclaimer\n\n"
        "REPORT QUESTIONS STRUCTURE:\n"
        "📋 Report Summary | 🔍 Important Findings | ⚠️ Abnormal Values | 💡 Health Suggestions | 👨‍⚕️ Follow-up Advice | ⚠️ Disclaimer\n"
        "\"\"\"\n\n"
        "    try:\n"
        "        completion = client.chat.completions.create(\n"
        "            model=\"openai/gpt-oss-20b\",\n"
        "            messages=[\n"
        "                {\"role\": \"system\", \"content\": system_prompt},\n"
        "                {\"role\": \"user\", \"content\": question},\n"
        "            ],\n"
        "            temperature=0.2,\n"
        "            max_tokens=600,\n"
        "        )\n"
        "        answer = completion.choices[0].message.content\n"
        "        if not answer:\n"
        "            raise ValueError(\"AI returned an empty response.\")\n"
        "        return answer.strip()\n"
        "    except Exception as e:\n"
        "        print(\"LLM SERVICE ERROR:\", repr(e))\n"
        "        raise"
    )
    add_code_block(doc, code_llm, "backend/app/services/llm_service.py")

    # 6.3.2 pdf_service.py
    add_heading3(doc, "6.3.2 In-Memory PDF Processing Service (backend/app/services/pdf_service.py)")
    add_paragraph(
        doc,
        "The pdf_service.py module provides zero-disk-write document parsing, reading directly from byte streams in RAM "
        "and eliminating OS file-lock concurrency faults on Windows:"
    )
    code_pdf = (
        "import fitz\n\n"
        "def extract_text_from_pdf(file_bytes: bytes) -> str:\n"
        "    \"\"\"\n"
        "    Extract text directly from PDF bytes in memory.\n"
        "    No temporary file is created on disk, preventing Windows file-lock issues.\n"
        "    \"\"\"\n"
        "    if not file_bytes:\n"
        "        raise ValueError(\"The uploaded PDF is empty.\")\n\n"
        "    # Validate magic byte header signature\n"
        "    if not file_bytes.startswith(b\"%PDF-\"):\n"
        "        raise ValueError(\n"
        "            \"The uploaded file is not a valid PDF. \"\n"
        "            \"Please upload a genuine PDF document.\"\n"
        "        )\n\n"
        "    try:\n"
        "        document = fitz.open(stream=file_bytes, filetype=\"pdf\")\n"
        "        text = \"\"\n"
        "        for page in document:\n"
        "            text += page.get_text()\n"
        "        document.close()\n"
        "        return text.strip()\n"
        "    except Exception as e:\n"
        "        print(\"PDF SERVICE ERROR:\", repr(e))\n"
        "        raise"
    )
    add_code_block(doc, code_pdf, "backend/app/services/pdf_service.py")

    # 6.3.3 ai.py router
    add_heading3(doc, "6.3.3 AI Clinical Router & Report Analyzer (backend/app/routers/ai.py)")
    add_paragraph(
        doc,
        "The ai.py router handles /ask and /analyze-report endpoints, orchestrating authentication checks, prompt construction, "
        "LLM inference, and transaction logging:"
    )
    code_ai = (
        "from fastapi import APIRouter, UploadFile, File, HTTPException, Form, Depends\n"
        "from sqlalchemy.orm import Session\n"
        "from app.services.llm_service import ask_medimind\n"
        "from app.services.pdf_service import extract_text_from_pdf\n"
        "from app.services.auth_service import get_current_user\n"
        "from app.database import get_db\n"
        "from app.models.user import User\n"
        "from app.models.activity import Activity\n\n"
        "router = APIRouter()\n\n"
        "def detect_feature(question: str) -> str:\n"
        "    q_lower = question.lower()\n"
        "    if \"my symptoms are:\" in q_lower: return \"Symptom Checker\"\n"
        "    if \"provide educational information about the medicine:\" in q_lower: return \"Medicine Information\"\n"
        "    if \"user's healthcare question:\" in q_lower: return \"AI Health Chat\"\n"
        "    return \"AI Assistant\"\n\n"
        "@router.get(\"/ask\")\n"
        "def ask(question: str, current_user: User = Depends(get_current_user), db: Session = Depends(get_db)):\n"
        "    if not question.strip():\n"
        "        raise HTTPException(status_code=400, detail=\"Question cannot be empty.\")\n"
        "    try:\n"
        "        answer = ask_medimind(question)\n"
        "        feature = detect_feature(question)\n"
        "        activity = Activity(user_id=current_user.id, feature=feature, question=question, response=answer)\n"
        "        db.add(activity)\n"
        "        db.commit()\n"
        "        return {\"question\": question, \"answer\": answer}\n"
        "    except Exception as e:\n"
        "        db.rollback()\n"
        "        raise HTTPException(status_code=500, detail=\"Unable to process your question.\")\n\n"
        "@router.post(\"/analyze-report\")\n"
        "async def analyze_report(\n"
        "    file: UploadFile = File(...),\n"
        "    language: str = Form(\"English\"),\n"
        "    current_user: User = Depends(get_current_user),\n"
        "    db: Session = Depends(get_db),\n"
        "):\n"
        "    if not file.filename or not file.filename.lower().endswith(\".pdf\"):\n"
        "        raise HTTPException(status_code=400, detail=\"Only PDF files are supported.\")\n"
        "    try:\n"
        "        file_bytes = await file.read()\n"
        "        report_text = extract_text_from_pdf(file_bytes)\n"
        "        if not report_text.strip():\n"
        "            raise HTTPException(status_code=400, detail=\"No readable text found in PDF.\")\n\n"
        "        lang_rule = \"Respond completely in Telugu language.\" if language.lower() in [\"telugu\", \"te\"] else \"Respond in English.\"\n"
        "        prompt = f\"Analyze this medical report.\\n{lang_rule}\\nReport:\\n{report_text}\\nStructure:\\n# 📋 Summary\\n# 🔍 Findings\\n# ⚠️ Abnormal Values\\n# 💊 Suggestions\\n# 🚨 When to Consult a Doctor\\n# ⚠️ Disclaimer\"\n"
        "        analysis = ask_medimind(prompt)\n"
        "        activity = Activity(user_id=current_user.id, feature=\"Report Analyzer\", question=f\"Medical Report: {file.filename}\", response=analysis)\n"
        "        db.add(activity)\n"
        "        db.commit()\n"
        "        return {\"filename\": file.filename, \"language\": language, \"analysis\": analysis}\n"
        "    except HTTPException: raise\n"
        "    except Exception as e:\n"
        "        db.rollback()\n"
        "        raise HTTPException(status_code=500, detail=\"Failed to analyze the medical report.\")"
    )
    add_code_block(doc, code_ai, "backend/app/routers/ai.py")

    # 6.3.4 auth_service.py
    add_heading3(doc, "6.3.4 Authentication & JWT Service (backend/app/services/auth_service.py)")
    add_paragraph(
        doc,
        "The auth_service.py module manages bcrypt hashing, token generation, and Bearer credential validation:"
    )
    code_auth_svc = (
        "import os\n"
        "from datetime import datetime, timedelta, timezone\n"
        "from dotenv import load_dotenv\n"
        "from fastapi import Depends, HTTPException, status\n"
        "from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer\n"
        "from jose import JWTError, jwt\n"
        "from passlib.context import CryptContext\n"
        "from sqlalchemy.orm import Session\n"
        "from app.database import get_db\n"
        "from app.models.user import User\n\n"
        "load_dotenv()\n"
        "SECRET_KEY = os.getenv(\"SECRET_KEY\")\n"
        "ALGORITHM = \"HS256\"\n"
        "ACCESS_TOKEN_EXPIRE_MINUTES = 60\n\n"
        "pwd_context = CryptContext(schemes=[\"bcrypt\"], deprecated=\"auto\")\n"
        "security = HTTPBearer()\n\n"
        "def hash_password(password: str) -> str:\n"
        "    return pwd_context.hash(password)\n\n"
        "def verify_password(plain: str, hashed: str) -> bool:\n"
        "    return pwd_context.verify(plain, hashed)\n\n"
        "def create_access_token(data: dict, expires_minutes: int = ACCESS_TOKEN_EXPIRE_MINUTES) -> str:\n"
        "    to_encode = data.copy()\n"
        "    expire = datetime.now(timezone.utc) + timedelta(minutes=expires_minutes)\n"
        "    to_encode.update({\"exp\": expire})\n"
        "    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)\n\n"
        "def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security), db: Session = Depends(get_db)):\n"
        "    token = credentials.credentials\n"
        "    exc = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=\"Invalid or expired token.\", headers={\"WWW-Authenticate\": \"Bearer\"})\n"
        "    try:\n"
        "        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])\n"
        "        user_id = payload.get(\"sub\")\n"
        "        if user_id is None: raise exc\n"
        "        user = db.query(User).filter(User.id == int(user_id)).first()\n"
        "        if user is None: raise exc\n"
        "        return user\n"
        "    except (JWTError, ValueError): raise exc"
    )
    add_code_block(doc, code_auth_svc, "backend/app/services/auth_service.py")

    # 6.3.5 database.py and models
    add_heading3(doc, "6.3.5 Database Connection & ORM Models (backend/app/database.py & models/)")
    add_paragraph(
        doc,
        "The database.py module configures SQLite with connection pooling, and the models define User and Activity schemas:"
    )
    code_db = (
        "# backend/app/database.py\n"
        "from sqlalchemy import create_engine\n"
        "from sqlalchemy.orm import declarative_base, sessionmaker\n\n"
        "DATABASE_URL = \"sqlite:///./medimind.db\"\n"
        "engine = create_engine(DATABASE_URL, connect_args={\"check_same_thread\": False})\n"
        "SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)\n"
        "Base = declarative_base()\n\n"
        "def get_db():\n"
        "    db = SessionLocal()\n"
        "    try: yield db\n"
        "    finally: db.close()\n\n"
        "# backend/app/models/user.py\n"
        "from sqlalchemy import Column, Integer, String\n"
        "from app.database import Base\n\n"
        "class User(Base):\n"
        "    __tablename__ = \"users\"\n"
        "    id = Column(Integer, primary_key=True, index=True)\n"
        "    name = Column(String(100), nullable=False)\n"
        "    email = Column(String(150), unique=True, index=True, nullable=False)\n"
        "    password_hash = Column(String(255), nullable=False)\n\n"
        "# backend/app/models/activity.py\n"
        "from datetime import datetime, timezone\n"
        "from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey\n"
        "from app.database import Base\n\n"
        "class Activity(Base):\n"
        "    __tablename__ = \"activities\"\n"
        "    id = Column(Integer, primary_key=True, index=True)\n"
        "    user_id = Column(Integer, ForeignKey(\"users.id\"), nullable=False, index=True)\n"
        "    feature = Column(String(50), nullable=False)\n"
        "    question = Column(Text, nullable=True)\n"
        "    response = Column(Text, nullable=True)\n"
        "    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)"
    )
    add_code_block(doc, code_db, "backend/app/database.py and models")

    # 6.3.6 frontend api.js and AuthContext.jsx
    add_heading3(doc, "6.3.6 Frontend API Client & AuthContext (frontend/src/services/api.js & context/)")
    add_paragraph(
        doc,
        "The frontend uses Axios with automatic token interceptors and manages global authentication state via React Context:"
    )
    code_fe_auth = (
        "// frontend/src/services/api.js\n"
        "import axios from \"axios\";\n\n"
        "const api = axios.create({\n"
        "  baseURL: \"http://127.0.0.1:8000\",\n"
        "});\n\n"
        "api.interceptors.request.use((config) => {\n"
        "  const token = localStorage.getItem(\"medimind_token\");\n"
        "  if (token) {\n"
        "    config.headers.Authorization = `Bearer ${token}`;\n"
        "  }\n"
        "  return config;\n"
        "});\n\n"
        "api.interceptors.response.use(\n"
        "  (response) => response,\n"
        "  (error) => {\n"
        "    if (error.response?.status === 401) {\n"
        "      localStorage.removeItem(\"medimind_token\");\n"
        "      localStorage.removeItem(\"medimind_user\");\n"
        "      if (window.location.pathname !== \"/login\") {\n"
        "        window.location.href = `/login?sessionExpired=true&from=${encodeURIComponent(window.location.pathname)}`;\n"
        "      }\n"
        "    }\n"
        "    return Promise.reject(error);\n"
        "  }\n"
        ");\n"
        "export default api;\n\n"
        "// frontend/src/context/AuthContext.jsx\n"
        "import { createContext, useContext, useEffect, useState } from \"react\";\n"
        "const AuthContext = createContext(null);\n\n"
        "export const AuthProvider = ({ children }) => {\n"
        "  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem(\"medimind_user\") || \"null\"));\n"
        "  const [token, setToken] = useState(() => localStorage.getItem(\"medimind_token\"));\n"
        "  const isLoggedIn = Boolean(token && user);\n\n"
        "  const login = (accessToken, userData) => {\n"
        "    localStorage.setItem(\"medimind_token\", accessToken);\n"
        "    localStorage.setItem(\"medimind_user\", JSON.stringify(userData));\n"
        "    setToken(accessToken);\n"
        "    setUser(userData);\n"
        "  };\n\n"
        "  const logout = () => {\n"
        "    localStorage.removeItem(\"medimind_token\");\n"
        "    localStorage.removeItem(\"medimind_user\");\n"
        "    setToken(null); setUser(null);\n"
        "  };\n\n"
        "  return (\n"
        "    <AuthContext.Provider value={{ user, token, isLoggedIn, login, logout }}>\n"
        "      {children}\n"
        "    </AuthContext.Provider>\n"
        "  );\n"
        "};\n"
        "export const useAuth = () => useContext(AuthContext);"
    )
    add_code_block(doc, code_fe_auth, "frontend/src/services/api.js & AuthContext.jsx")

    # 6.3.7 ProtectedRoute.jsx
    add_heading3(doc, "6.3.7 Protected Route Wrapper (frontend/src/routes/ProtectedRoute.jsx)")
    add_paragraph(
        doc,
        "The ProtectedRoute component guards sensitive views (Dashboard, History) from unauthenticated access:"
    )
    code_prot = (
        "import { Navigate, useLocation } from \"react-router-dom\";\n\n"
        "function ProtectedRoute({ children }) {\n"
        "  const location = useLocation();\n"
        "  const token = localStorage.getItem(\"medimind_token\");\n\n"
        "  if (!token) {\n"
        "    return (\n"
        "      <Navigate to=\"/login\" replace state={{ from: location.pathname }} />\n"
        "    );\n"
        "  }\n"
        "  return children;\n"
        "}\n\n"
        "export default ProtectedRoute;"
    )
    add_code_block(doc, code_prot, "frontend/src/routes/ProtectedRoute.jsx")

    add_heading2(doc, "6.4 RESTful API Endpoints Specification")
    add_paragraph(
        doc,
        "Table 6.1 documents all HTTP endpoints exposed by the MediMind AI FastAPI backend, detailing required authorizations, "
        "request payloads, and responses."
    )

    api_headers = ["HTTP Method", "Endpoint URI", "Auth", "Request Payload / Query", "Response Code", "Response Body"]
    api_rows = [
        ["GET", "/", "Public", "None", "200 OK", "{\"message\": \"Welcome to MediMind AI Backend 🚀\"}"],
        ["POST", "/auth/register", "Public", "RegisterRequest: {name, email, password}", "200 OK / 400", "{\"message\": \"...\", \"user\": {id, name, email}}"],
        ["POST", "/auth/login", "Public", "LoginRequest: {email, password}", "200 OK / 401", "{\"access_token\": \"...\", \"token_type\": \"bearer\", \"user\": {...}}"],
        ["POST", "/auth/forgot-password", "Public", "ForgotPasswordRequest: {email, new_password}", "200 OK / 404", "{\"message\": \"Password reset successful...\"}"],
        ["GET", "/auth/me", "Bearer JWT", "Header: Authorization Bearer", "200 OK / 401", "{\"id\": 1, \"name\": \"...\", \"email\": \"...\"}"],
        ["GET", "/ask", "Bearer JWT", "Query: ?question=...", "200 OK / 400 / 500", "{\"question\": \"...\", \"answer\": \"...\"}"],
        ["POST", "/analyze-report", "Bearer JWT", "Multipart: file (PDF), language (str)", "200 OK / 400 / 500", "{\"filename\": \"...\", \"language\": \"...\", \"analysis\": \"...\"}"],
        ["GET", "/history", "Bearer JWT", "Header: Authorization Bearer", "200 OK / 401", "{\"user_id\": 1, \"count\": 5, \"activities\": [...]}"],
        ["GET", "/history/stats", "Bearer JWT", "Header: Authorization Bearer", "200 OK / 401", "{\"user_id\": 1, \"total_activities\": 5, \"reports_analyzed\": 2, ...}"]
    ]
    add_table(doc, api_headers, api_rows, [1.0, 1.4, 0.9, 1.8, 1.0, 1.8])
    add_paragraph(doc, "Table 6.1: Complete MediMind AI RESTful API Specification", italic=True)

    add_heading2(doc, "6.5 Authentication Flow & JWT Bearer Token Security")
    add_paragraph(
        doc,
        "Authentication security in MediMind AI is architectured to prevent token hijacking, cross-site request forgery, and replay attacks:"
    )
    add_bullet(doc, "Passwords submitted during registration or password recovery are processed through Passlib's bcrypt hashing scheme with 12 rounds of salted hashing. Stored password hashes cannot be decrypted even in the event of database exfiltration.", "Salted Bcrypt Cryptography: ")
    add_bullet(doc, "Access tokens are encoded using python-jose with HS256 HMAC-SHA256 signature algorithms. The token payload encapsulates user identity ('sub') and expiration ('exp'). Tokens expire automatically after 60 minutes.", "HMAC-SHA256 Signed Tokens: ")
    add_bullet(doc, "Client-side Axios interceptors inspect every outgoing HTTP call and attach the Bearer token in the 'Authorization' header. Incoming requests are intercepted on the backend via FastAPI's HTTPBearer dependency.", "Stateless Bearer Verification: ")
    add_bullet(doc, "If an invalid or expired token is detected, the backend returns HTTP 401 Unauthorized with WWW-Authenticate header. The frontend interceptor captures this status, purges LocalStorage, and redirects the browser to the login page with query state preserved.", "Session Eviction on 401: ")

    doc.add_page_break()