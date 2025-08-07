// src/components/Modal.jsx
import "../styles/Modal.css";

function Modal({ isOpen, onClose, title, image, description }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    
      <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div className="cont"> <h2>{title}</h2>
      
        <p>{description}</p>
        <button onClick={onClose}>Cerrar</button>
        </div>
         <img src={image} alt={title} />
      </div>
      
    </div>
  );
}

export default Modal;
