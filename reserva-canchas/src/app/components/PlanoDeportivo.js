import React from 'react';
import Cancha from './Cancha';

const deportes = {
  futbol: { nombre: 'Fútbol', canchas: 4 },
  baloncesto: { nombre: 'Baloncesto', canchas: 3 },
  tenis: { nombre: 'Tenis', canchas: 2 }
};

export default function PlanoDeportivo({ deporte, reservarCancha, reservas }) {
  return (
    <div className="d-flex flex-wrap gap-2">
      {Array.from({ length: deportes[deporte].canchas }).map((_, index) => (
        <Cancha 
          key={index} 
          index={index} 
          reservada={reservas[deporte].includes(index)} 
          reservarCancha={reservarCancha} 
        />
      ))}
    </div>
  );
}
