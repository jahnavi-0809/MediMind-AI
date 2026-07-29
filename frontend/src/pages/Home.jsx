import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-50">

      <h1 className="text-5xl font-bold text-blue-700">
        🏥 MediMind AI
      </h1>

      <p className="mt-8 text-xl">
        {message}
      </p>

    </div>
  );
}

export default Home;