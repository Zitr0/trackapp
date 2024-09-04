import React from 'react';

const TrackingHistory = ({ history, onTrack, onDelete }) => {
  return (
    <div className="tracking-history">
      <h3>Consultas</h3>
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            <span>{item.guia} - {item.estado}</span>
            <div>
              <button onClick={() => onTrack(item.guia)} className="tracking-history-button">Consultar</button>
              <button onClick={() => onDelete(item.id)} className="tracking-history-button delete-button">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackingHistory;

