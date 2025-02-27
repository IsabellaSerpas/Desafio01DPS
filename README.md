En esta aplicacion podemos realizar reservaciones de canchas de diferentes deportes como futbol, basketball y tenis mostrando la cantidad de canchas disponibles de ese deporte, por una cierta cantidad de horas y a
base de esta, se puede calcular el precio a pagar por tal cancha y por esa cantidad de horas, a demas de poder cancelar la reservación.

En el componente SelectorDeportes, lo que hacemos es mostrar los diferentes tipos de deportes de los cuales se ofrece canchas, los muestra para que el usuario pueda seleccionarlo y se cambia a color amarillo una vez 
haya sido seleccionado/reservado.

En el componente PlanoDeportivo, lo que hace es que se muestren las canchas disponibles para cada deporte de las cuales el usuario puede elegir para realizar la reserva.

En el componente Cancha, lo que hace es que permite al usuario reservar o cancelar la reserva de una cancha.

En el componente ResumenReserva, lo que hace es el resumen de toda la reserva, mostrando la cancha reservada y el precio por las horas a pagar.

Se le modificó el page.js importando todos los componentes creados anteriormente para que pueda ser mostrados en el buscador al ingresar la url del proyecto alojado en el localhost y se le agregó css para poder 
centrar la aplicación.
