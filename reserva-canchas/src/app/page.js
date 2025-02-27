'use client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectorDeporte from './components/SelectorDeporte';
import PlanoDeportivo from './components/PlanoDeportivo';
import ResumenReserva from './components/ResumenReserva';

const deportes = {
  futbol: { nombre: 'Fútbol', canchas: 4, precio: 20 },
  baloncesto: { nombre: 'Baloncesto', canchas: 3, precio: 15 },
  tenis: { nombre: 'Tenis', canchas: 2, precio: 25 }
};

export default function App() {
  const [deporteSeleccionado, setDeporteSeleccionado] = useState('futbol');
  const [reservas, setReservas] = useState({ futbol: [], baloncesto: [], tenis: [] });
  const [duracion, setDuracion] = useState(1);

  const seleccionarDeporte = (deporte) => {
    setDeporteSeleccionado(deporte);
  };

  const reservarCancha = (index) => {
    if (!reservas[deporteSeleccionado].includes(index)) {
      setReservas({
        ...reservas,
        [deporteSeleccionado]: [...reservas[deporteSeleccionado], index]
      });
    } else {
      cancelarReserva(index);
    }
  };

  const cancelarReserva = (index) => {
    setReservas({
      ...reservas,
      [deporteSeleccionado]: reservas[deporteSeleccionado].filter((c) => c !== index)
    });
  };

  const calcularTotal = () => {
    return reservas[deporteSeleccionado].length * deportes[deporteSeleccionado].precio * duracion;
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Reserva de Canchas Deportivas</h2>
      <SelectorDeporte seleccionarDeporte={seleccionarDeporte} deporteSeleccionado={deporteSeleccionado} />
      <PlanoDeportivo deporte={deporteSeleccionado} reservarCancha={reservarCancha} reservas={reservas} />
      <div className="mt-3">
        <label>Duración (horas): </label>
        <input 
          type="number" 
          value={duracion} 
          onChange={(e) => setDuracion(Number(e.target.value))} 
          min="1" 
          className="form-control w-25" 
        />
      </div>
      <ResumenReserva reservas={reservas[deporteSeleccionado]} total={calcularTotal()} deporte={deporteSeleccionado} cancelarReserva={cancelarReserva} />
    </div>
  );
}
