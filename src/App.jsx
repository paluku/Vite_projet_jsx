import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Chargement...");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Impossible de contacter le serveur"));
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center px-6">
      <div className="max-w-lg w-full bg-white rounded-2xl p-8 text-center shadow-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          React + Python
        </h1>

        <p className="text-gray-600 mb-6">
          Mon premier projet avec un frontend React et un backend Python.git status
        </p>

        <div className="bg-blue-50 rounded-xl p-4">
          <p className="font-semibold text-blue-700">
            {message}
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;