// src/App.jsx
import { useState } from "react";
import Card from "./components/Card";
import { decisionTree, outcomes } from "./data/decisionTree";
import "./App.css";

function App() {
  const [path, setPath] = useState(["start"]);

  const handleSelect = (cardId) => {
    setPath((prevPath) => [...prevPath, cardId]);
  };

  const currentLevel = path[path.length - 1];

  let currentCards = [];

  if (currentLevel === "start") {
    currentCards = decisionTree.start;
  } else {
    let node = decisionTree[currentLevel];
    if (!node) {
      node = decisionTree.start.find((item) => item.id === currentLevel);
    }

    if (node && node.next) {
      currentCards = node.next.map((id) => {
        return decisionTree[id] || decisionTree.start.find((item) => item.id === id);
      });
    } else {
      currentCards = null;
    }
  }

  const currentOutcome = outcomes[currentLevel];

  return (
    <div className="app">
      <h1 className="game-title">⚔️ Conoce tu suerte ⚖️</h1>

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
      ) : currentOutcome ? (
        <div className="final-box">
          <img className="final-image" src={currentOutcome.image} alt={currentOutcome.title} />
          <h2 className="final-title">{currentOutcome.title}</h2>
          <p className="final-description">{currentOutcome.description}</p>
          <button className="reset-button" onClick={() => setPath(["start"])}>Volver al inicio</button>
        </div>
      ) : (
        <div className="final-box">
          <h2 className="final-title">Final desconocido</h2>
          <p className="final-description">No se encontraron consecuencias para esta ruta.</p>
          <button className="reset-button" onClick={() => setPath(["start"])}>Volver al inicio</button>
        </div>
      )}
    </div>
  );
}

export default App;