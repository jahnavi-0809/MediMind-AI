import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SymptomChecker from "./pages/SymptomChecker";
import ReportAnalyzer from "./pages/ReportAnalyzer";
import MedicineInfo from "./pages/MedicineInfo";
import AIChat from "./pages/AIChat";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import History from "./pages/History";

import ProtectedRoute from "./routes/ProtectedRoute";

import { LanguageProvider } from "./context/LanguageContext";
import { AuthProvider } from "./context/AuthContext";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <LanguageProvider>
      <AuthProvider>

        {/* ==================================================
            GLOBAL TOAST NOTIFICATIONS
        ================================================== */}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <Navbar />

        {/* ==================================================
            APPLICATION ROUTES
        ================================================== */}

        <Routes>

          {/* ==================================================
              PUBLIC ROUTES
          ================================================== */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/symptoms"
            element={<SymptomChecker />}
          />

          <Route
            path="/report"
            element={<ReportAnalyzer />}
          />

          <Route
            path="/medicine"
            element={<MedicineInfo />}
          />

          <Route
            path="/chat"
            element={<AIChat />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          {/* ==================================================
              PROTECTED ROUTES
          ================================================== */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />

        </Routes>

        {/* ==================================================
            FOOTER
        ================================================== */}

        <Footer />

      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;