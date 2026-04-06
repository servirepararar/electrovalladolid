import React, { useState, useEffect, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  urgent: string;
}

interface Message {
  type: "bot" | "user";
  text: string;
}

const ChatAssistant: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
    date: "",
    urgent: "",
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const questions: string[] = [
    "Hola 👋, somos ElectroValladolid, es ungusto poder atenderte, para poder agendar una cita, ¿puedes decirme cuál es tu nombre?",
    "Ok, ahora ¿Cuál es tu numero de teléfono?",
    "¿Puedes indicarme el servicio que necesitas?",
    "Una cosa mas ¿Cual es tu direccion?",
    "¿Es urgente? (Sí/No)",
  ];

  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setMessages([{ type: "bot", text: questions[0] }]);
    }
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleAnswer = (answer: string) => {
    const fields: (keyof FormData)[] = [
      "name",
      "phone",
      "service",
      "date",
      "urgent",
    ];

    setFormData((prev) => ({
      ...prev,
      [fields[step]]: answer,
    }));

    setMessages((prev) => [...prev, { type: "user", text: answer }]);

    if (step + 1 < questions.length) {
      setStep(step + 1);
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: questions[step + 1] },
      ]);
    } else {
      sendEmail({
        ...formData,
        [fields[step]]: answer,
      });
    }
  };

  const sendEmail = (data: FormData) => {
    emailjs
      .send(
        "service_mi4gden",
        "template_2wv4pyi",
        data,
        "cDsD12TAj0cTyQBr_"
      )
      .then(
        () =>
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: "¡Cita enviada correctamente! ✅" },
          ]),
        () =>
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: "Error al enviar 😢" },
          ])
      );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const answer = inputRef.current?.value.trim();
    if (!answer) return;
    handleAnswer(answer);
    if (inputRef.current) inputRef.current.value = "";
  };

  // 💙 BOTÓN FLOTANTE PRO (AZUL REY)
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 16px",
          borderRadius: "14px",
          background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
          color: "white",
          border: "none",
          fontSize: "14px",
          fontWeight: "600",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          (e.currentTarget.style.transform = "scale(1.05)");
        }}
        onMouseOut={(e) => {
          (e.currentTarget.style.transform = "scale(1)");
        }}
      >
        🤖 Asistente Virtual
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "350px",
        maxWidth: "90%",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        background: "#f9f9f9",
        zIndex: 9999,
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
          color: "white",
          padding: "8px 12px",
          borderRadius: "8px 8px 0 0",
        }}
      >
        <span>Chat en vivo</span>
        <button
          onClick={() => setIsOpen(false)}
          style={{
            border: "none",
            background: "transparent",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ✖
        </button>
      </div>

      {/* MENSAJES */}
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          padding: "10px",
          maxHeight: "300px",
          background: "#f1f1f1",
          marginTop: "5px",
          borderRadius: "0 0 8px 8px",
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.type === "bot" ? "left" : "right",
              margin: "5px 0",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "20px",
                background:
                  msg.type === "bot" ? "#eee" : "#1d4ed8",
                color: msg.type === "bot" ? "#000" : "#fff",
                maxWidth: "80%",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* INPUT */}
      {step < questions.length && (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", marginTop: "5px" }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Escribe tu respuesta..."
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "20px 0 0 20px",
              border: "1px solid #ccc",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 15px",
              border: "none",
              borderRadius: "0 20px 20px 0",
              background: "#1d4ed8",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default ChatAssistant;
