// src/components/InfoSection.tsx
import React, { useState } from "react";
import { fetchDiseaseData } from "../../api";

const InfoSection: React.FC = () => {
  interface Message {
    role: "user" | "assistant";
    content: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: query }]);
    setQuery("");

    try {
      const response = await fetchDiseaseData(query);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
      setError(null); // Limpiar el error en caso de éxito
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Error fetching data");
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Lo siento, no se pudo obtener información.",
        },
      ]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-center">Consulta de Enfermedades</h2>
          <div className="mb-4">
            <div className="input-group">
              <input
                type="text"
                placeholder="¿Sobre qué enfermedad deseas información?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-control"
              />
              <button onClick={handleSearch} className="btn btn-primary">
                Buscar
              </button>
            </div>
          </div>
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}
          <div className="border-top pt-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-3 rounded ${
                  message.role === "user"
                    ? "bg-primary text-white"
                    : "bg-light text-dark"
                }`}
              >
                <strong>
                  {message.role === "user" ? "Usuario:" : "Asistente:"}
                </strong>{" "}
                {message.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
