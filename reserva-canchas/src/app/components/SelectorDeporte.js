import React from 'react';

const deportes = {
  futbol: { nombre: 'Fútbol' },
  baloncesto: { nombre: 'Baloncesto' },
  tenis: { nombre: 'Tenis' }
};

export default function SelectorDeporte({ seleccionarDeporte, deporteSeleccionado }) {
  return (
    <div className="btn-group mb-3">
      {Object.keys(deportes).map((deporte) => (
        <button 
          key={deporte} 
          className={`btn btn-${deporteSeleccionado === deporte ? 'primary' : 'secondary'}`} 
          onClick={() => seleccionarDeporte(deporte)}
        >
          {deportes[deporte].nombre}
        </button>
      ))}
    </div>
  );
}
