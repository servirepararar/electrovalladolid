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
    "Hola 👋, ¿cuál es tu nombre?",
    "¿Cuál es tu teléfono?",
    "¿Qué servicio necesitas?",
    "¿Para qué fecha es la cita?",
    "¿Es urgente? (Sí/No)",
  ];

  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      setMessages([{ type: "bot", text: questions[0] }]);
    }
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleAnswer = (answer: string) => {
    const fields: (keyof FormData)[] = ["name", "phone", "service", "date", "urgent"];
    setFormData({ ...formData, [fields[step]]: answer });

    setMessages((prev) => [...prev, { type: "user", text: answer }]);

    if (step + 1 < questions.length) {
      setStep(step + 1);
      setMessages((prev) => [...prev, { type: "bot", text: questions[step + 1] }]);
    } else {
      sendEmail({ ...formData, [fields[step]]: answer });
    }
  };

  const sendEmail = (data: FormData) => {
    emailjs
      .send(
        "service_mi4gden",       // Tu Service ID
        "template_2wv4pyi",      // Tu Template ID
        data,
        "cDsD12TAj0cTyQBr_"      // Tu Public Key
      )
      .then(
        () => setMessages((prev) => [...prev, { type: "bot", text: "¡Cita enviada correctamente! ✅" }]),
        () => setMessages((prev) => [...prev, { type: "bot", text: "Error al enviar 😢" }])
      );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const answer = inputRef.current?.value.trim();
    if (!answer) return;
    handleAnswer(answer);
    if (inputRef.current) inputRef.current.value = "";
  };

  if (!isOpen) {
    // Botón flotante inicial
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#007bff",
          color: "white",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        💬
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
      {/* Header con botón cerrar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#007bff",
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

      {/* Mensajes */}
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
                background: msg.type === "bot" ? "#eee" : "#007bff",
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

      {/* Input */}
      {step < questions.length && (
        <form onSubmit={handleSubmit} style={{ display: "flex", marginTop: "5px" }}>
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
              background: "#007bff",
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
