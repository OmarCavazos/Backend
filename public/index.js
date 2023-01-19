const socket = io();

socket.on("saludo", (data) => {
    console.log(data);
    socket.emit("respuesta", "hola, soy el cliente")
})