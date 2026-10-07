# 🩺 MediMind AI

### AI-Powered Healthcare Assistant

MediMind AI is an AI-powered healthcare assistant designed to provide users with accessible and easy-to-understand health information through an interactive web application.

The application combines a React frontend with a FastAPI backend and AI/LLM-based services to provide four core healthcare features:

- 🩺 Symptom Checker
- 📄 Medical Report Analyzer
- 💊 Medicine Information
- 💬 AI Health Chat

> ⚠️ **Disclaimer:** MediMind AI is an educational and informational project. It does not replace professional medical diagnosis, treatment, or advice from a qualified healthcare professional.

---

## ✨ Key Features

### 🩺 1. Symptom Checker

The Symptom Checker allows users to enter their symptoms and receive AI-assisted information about possible health conditions and general guidance.

**Key capabilities:**
- Enter and analyze symptoms
- AI-assisted health information
- Easy-to-understand responses
- General guidance for further consultation

---

### 📄 2. Medical Report Analyzer

The Medical Report Analyzer allows users to upload medical reports and receive AI-assisted explanations of the information contained in their reports.

**Key capabilities:**
- Upload medical reports
- Process medical report information
- Extract text from PDF reports
- AI-assisted report analysis
- Generate simplified explanations

---

### 💊 3. Medicine Information

The Medicine Information feature allows users to search for medicines and access general information about them.

**Key capabilities:**
- Medicine search
- General medicine information
- Uses and precautions
- Easy-to-understand explanations

---

### 💬 4. AI Health Chat

AI Health Chat provides a conversational interface where users can ask general health-related questions and receive AI-assisted responses.

**Key capabilities:**
- Natural language interaction
- Conversational health assistance
- AI-generated responses
- Interactive chat experience

---

## 🏗️ System Architecture

```text
                         ┌─────────────────┐
                         │      User       │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  React Frontend │
                         └────────┬────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          │                       │                       │
          ▼                       ▼                       ▼
 ┌─────────────────┐     ┌──────────────────┐    ┌──────────────────┐
 │ Symptom Checker │     │ Medical Report   │    │ Medicine         │
 │                 │     │ Analyzer         │    │ Information      │
 └─────────────────┘     └──────────────────┘    └──────────────────┘
          │                       │                       │
          └───────────────────────┼───────────────────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  AI Health Chat │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │ FastAPI Backend │
                         └────────┬────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                    ▼             ▼             ▼
              Authentication   LLM Service   PDF Service
                    │             │             │
                    └─────────────┼─────────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │ AI-Assisted     │
                         │ Response        │
                         └─────────────────┘

🛠️ Technology Stack
Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Axios
- Vite
Backend
- Python
- FastAPI
- REST APIs
- Uvicorn
AI / ML
- Generative AI
- Large Language Models (LLMs)
- AI-assisted response generation
Document Processing
- PDF processing
- Medical report text extraction
Database & Authentication
- Database integration
- User authentication
- Protected routes
Development Tools
- Git
- GitHub
- Visual Studio Code
📂 Project Structure
MediMind-AI/
│
├── backend/
│   ├── app/
│   │   ├── models/
│   │   │   ├── activity.py
│   │   │   └── user.py
│   │   │
│   │   ├── routers/
│   │   │   ├── ai.py
│   │   │   ├── auth.py
│   │   │   └── history.py
│   │   │
│   │   ├── services/
│   │   │   ├── auth_service.py
│   │   │   ├── llm_service.py
│   │   │   └── pdf_service.py
│   │   │
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── database.py
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │
│   └── src/
│       ├── components/
│       │   ├── CTA.jsx
│       │   ├── FAQ.jsx
│       │   ├── FeatureCard.jsx
│       │   ├── Footer.jsx
│       │   ├── HealthTips.jsx
│       │   ├── Hero.jsx
│       │   ├── HowItWorks.jsx
│       │   ├── MedicineInfo.jsx
│       │   ├── Navbar.jsx
│       │   ├── ReportAnalyzer.jsx
│       │   ├── SplashScreen.jsx
│       │   ├── StatsSection.jsx
│       │   ├── TeluguKeyboard.jsx
│       │   ├── Testimonials.jsx
│       │   └── WhyChoose.jsx
│       │
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   └── LanguageContext.jsx
│       │
│       ├── pages/
│       │   ├── AIChat.jsx
│       │   ├── About.jsx
│       │   ├── Dashboard.jsx
│       │   ├── ForgotPassword.jsx
│       │   ├── History.jsx
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── MedicineInfo.jsx
│       │   ├── Register.jsx
│       │   ├── ReportAnalyzer.jsx
│       │   └── SymptomChecker.jsx
│       │
│       ├── routes/
│       │   └── ProtectedRoute.jsx
│       │
│       ├── services/
│       │   └── api.js
│       │
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── report_diagrams/
├── report_generator/
├── .gitignore
└── README.md
🔄 How It Works
1. The user opens the MediMind AI web application.
2. The user registers or logs into the application.
3. The user accesses the dashboard.
4. The user selects one of the four healthcare features.
5. The React frontend sends the request to the FastAPI backend.
6. The backend processes the user's input or uploaded medical report.
7. AI/LLM services generate the relevant response.
8. The response is returned to the frontend.
9. The user views the AI-assisted information through the application.
🎯 Project Objectives
- Build an AI-powered healthcare information platform.
- Simplify complex health-related information for users.
- Provide AI-assisted symptom analysis.
- Help users understand uploaded medical reports.
- Provide general medicine-related information.
- Enable conversational health-related interaction.
- Demonstrate practical use of AI and LLM technologies.
- Develop a complete frontend and backend web application.
## 📸 Application Screenshots

### 🏠 Dashboard

![MediMind AI Dashboard](Dashboard.png)

### 🩺 Symptom Checker

![MediMind AI Symptom Checker](<Symptom Checker.png>)

### 📄 Medical Report Analyzer

![MediMind AI Medical Report Analyzer](<Medical Report Analyzer.png>)

### 💊 Medicine Information

![MediMind AI Medicine Information](<Medicine Information.png>)

### 💬 AI Health Chat

![MediMind AI Health Chat](<AI Health Chat.png>)
🚀 Getting Started
Prerequisites
Make sure the following are installed:
- Python 3.x
- Node.js
- npm
- Git
1. Clone the Repository
git clone https://github.com/jahnavi-0809/MediMind-AI.git

cd MediMind-AI

2. Backend Setup
Navigate to the backend directory:
cd backend

Create a Python virtual environment:
python -m venv venv

Activate the virtual environment on Windows:
venv\Scripts\activate

Install the required dependencies:
pip install -r requirements.txt

Start the FastAPI backend:
uvicorn app.main:app --reload

The backend will be available at:
http://127.0.0.1:8000

3. Frontend Setup
Open a new terminal.
Navigate to the frontend directory:
cd frontend

Install dependencies:
npm install

Start the development server:
npm run dev

The frontend will be available at the local URL displayed by Vite.
📚 Learning Outcomes
Through this project, I gained practical experience in:
- AI-powered application development
- Generative AI and LLM integration
- FastAPI backend development
- React frontend development
- REST API integration
- PDF processing
- Frontend-backend communication
- User authentication
- Protected routes
- Git and GitHub
- Full-stack application development
🔮 Future Enhancements
- 🌐 Multi-language support
- 🎙️ Voice-based health interaction
- 📱 Mobile application
- 📊 Enhanced medical report visualization
- 🔐 Improved authentication and user management
- ☁️ Cloud deployment
- 🧠 Enhanced AI capabilities
- 📈 Improved health information retrieval
👩‍💻 Developer
Jahnavi
B.Tech – Artificial Intelligence and Machine Learning
🔗 LinkedIn - www.linkedin.com/in/jahnavigowda08-evuri

⚠️ Disclaimer
MediMind AI is developed for educational and informational purposes only.
The information generated by this application should not be considered a medical diagnosis, prescription, or treatment recommendation. Users should consult a qualified healthcare professional for medical diagnosis and treatment decisions.
