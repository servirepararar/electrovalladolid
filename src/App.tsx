import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />

      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/34641847249?text=Hola%20vi%20su%20web%20y%20necesito%20un%20electricista%20en%20Valladolid"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 1000
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          width="32"
          height="32"
        />
      </a>
    </BrowserRouter>
  )
}

export default App
