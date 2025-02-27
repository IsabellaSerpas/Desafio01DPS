// pages/index.js
import { useState } from 'react';
import PlanoDeportivo from '../components/PlanoDeportivo';
import ResumenReserva from '../components/ResumenReserva';
import SelectorDeporte from '../components/SelectorDeporte';

const deportes = ['Fútbol', 'Baloncesto', 'Tenis'];

const canchasIniciales = [
    { id: 1, nombre: 'Cancha 1', disponible: true },
    { id: 2, nombre: 'Cancha 2', disponible: false },
    { id: 3, nombre: 'Cancha 3', disponible: true },
    { id: 4, nombre: 'Cancha 4', disponible: true },
    { id: 5, nombre: 'Cancha 5', disponible: false },
    { id: 6, nombre: 'Cancha 6', disponible: true },
];

export default function Home() {
    const [canchas, setCanchas] = useState(canchasIniciales);
    const [deporteSeleccionado, setDeporteSeleccionado] = useState(deportes[0]);
    const [reserva, setReserva] = useState(null);
    const [duracion, setDuracion] = useState(1); // Duración en horas

    const handleReserve = (id) => {
        const canchaReservada = canchas.find((cancha) => cancha.id === id);
        if (canchaReservada) {
            setCanchas((prevCanchas) =>
                prevCanchas.map((cancha) =>
                    cancha.id === id ? { ...cancha, disponible: false } : cancha
                )
            );

            const total = duracion * 100; // Suponiendo que cada hora cuesta $100
            setReserva({
                canchaNombre: canchaReservada.nombre,
                deporte: deporteSeleccionado,
                duracion,
                total,
            });
        }
    };

    return (
        <div className="container mt-5">
            <h1>Reserva de Canchas Deportivas</h1>
            <SelectorDeporte deportes={deportes} onSelect={setDeporteSeleccionado} />
            <input
                type="number"
                className="form-control mt-3"
                value={duracion}
                onChange={(e) => setDuracion(e.target.value)}
                min="1"
            />
            <PlanoDeportivo canchas={canchas} onReserve={handleReserve} />
            <ResumenReserva reserva={reserva} />
        </div>
    );
}