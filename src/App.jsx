// src/App.jsx
import { useState } from "react";
import Card from "./components/Card";
import { decisionTree } from "./data/decisionTree";
import "./App.css";

function App() {
  const [path, setPath] = useState(["start"]);

  const handleSelect = (cardId) => {
    setPath((prevPath) => [...prevPath, cardId]);
  };

  // Obtenemos el nivel actual (el último id seleccionado)
  const currentLevel = path[path.length - 1];

  let currentCards = [];

  if (currentLevel === "start") {
    // En el nivel inicial mostramos el array start directamente
    currentCards = decisionTree.start;
  } else {
    // Buscamos el nodo actual en decisionTree
    let node = decisionTree[currentLevel];

    // Si no lo encontramos, intentamos buscarlo dentro del array start (por si es A, B, C)
    if (!node) {
      node = decisionTree.start.find((item) => item.id === currentLevel);
    }

    if (node && node.next) {
      // Mapeamos los ids del next para obtener las cartas completas
      currentCards = node.next.map((id) => {
        // Buscamos cada carta en decisionTree o en start si no está
        return decisionTree[id] || decisionTree.start.find((item) => item.id === id);
      });
    } else {
      // Nodo final sin siguiente nivel
      currentCards = null;
    }
  }

  return (
    <div className="App">
      <h1>Conoce tu suerte</h1>

      {currentCards && currentCards.length > 0 ? (
        <div className="card-container">
          {currentCards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              onClick={() => handleSelect(card.id)}
            />
          ))}
        </div>
      ) : (
        <div>
          <p>¡Has llegado al final de esta rama!</p>
          <button onClick={() => setPath(["start"])}>Volver al inicio</button>
        </div>
      )}
    </div>
  );
}

export default App;
