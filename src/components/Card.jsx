// src/components/Card.jsx
import "../App.css";

function Card({ title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
