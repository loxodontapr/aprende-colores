import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const colors = [
  { name: "ROJO", hex: "#D9534F", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/rojo.mp3" },
  { name: "AZUL", hex: "#007AFF", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/azul.mp3" },
  { name: "AMARILLO", hex: "#F4C842", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/amarillo.mp3" },
  { name: "VERDE", hex: "#4CAF50", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/verde.mp3" },
  { name: "ANARANJADO", hex: "#E57E25", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/anaranjado.mp3" },
  { name: "BLANCO", hex: "#FFFFFF", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/blanco.mp3" },
  { name: "NEGRO", hex: "#000000", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/negro.mp3" },
  { name: "ROSA", hex: "#FFB6C1", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/rosa.mp3" },
  { name: "MARRON", hex: "#8B4513", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/marron.mp3" },
  { name: "VIOLETA", hex: "#8A2BE2", audio: "https://raw.githubusercontent.com/loxodontapr/audio/main/violeta.mp3" }
];

export default function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [flashColor, setFlashColor] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleColorClick = (color) => {
    setFlashColor(color.hex);
    setSelectedColor(color.name);
    setShowMessage(true);

    const audio = new Audio(color.audio);
    audio.play().catch(err => console.error("Error al reproducir audio:", err));

    setTimeout(() => {
      setFlashColor(null);
      setShowMessage(false);
    }, 7000);
  };

  return (
    <div className="container" style={{ backgroundColor: flashColor || "#f3f4f6" }}>
      <h1 className="title">MIKA, ELIGE UN COLOR</h1>
      <div className="color-grid">
        {colors.map((color) => (
          <motion.button
            key={color.name}
            className="color-button"
            style={{ backgroundColor: color.hex, color: color.hex === "#FFFFFF" ? "#000000" : "#FFFFFF" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleColorClick(color)}
          >
            {color.name}
          </motion.button>
        ))}
      </div>
      {showMessage && (
        <motion.div className="message-box" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          HAS ELEGIDO: <span className="bold">{selectedColor}</span>
        </motion.div>
      )}
    </div>
  );
}
