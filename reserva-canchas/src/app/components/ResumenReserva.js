import React from 'react';

const deportes = {
  futbol: { nombre: 'Fútbol', precio: 20 },
  baloncesto: { nombre: 'Baloncesto', precio: 15 },
  tenis: { nombre: 'Tenis', precio: 25 }
};

export default function ResumenReserva({ reservas, total, deporte, cancelarReserva }) {
  return (
    <div className="mt-4">
      <h4>Resumen de Reserva</h4>
      <p>Deporte: {deportes[deporte].nombre}</p>
      <p>Canchas reservadas: {reservas.map((c) => (
        <span key={c} className="me-2">
          Cancha {c + 1} <button className="btn btn-sm btn-danger" onClick={() => cancelarReserva(c)}>X</button>
        </span>
      )) || 'Ninguna'}</p>
      <p>Total: ${total}</p>
    </div>
  );
}
