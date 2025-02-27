import React from 'react';

export default function Cancha({ index, reservada, reservarCancha }) {
  return (
    <button 
      className={`btn ${reservada ? 'btn-warning' : 'btn-primary'}`} 
      onClick={() => reservarCancha(index)}
    >
      {reservada ? `Cancelar Cancha ${index + 1}` : `Reservar Cancha ${index + 1}`}
    </button>
  );
}
