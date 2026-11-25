function mostrarDireccionRed() {
    document.getElementById("ip").textContent = "192.168.1.0";
}
function mostrarPuertaEnlace() {
    document.getElementById("ip").textContent = "192.168.1.1";
}
function mostrarBroadcast() {
    document.getElementById("ip").textContent = "192.168.1.255";
}
function mostrarMascara() {
    document.getElementById("ip").textContent = "255.255.255.0";
}
function generarIP() {

    let numeroAleatorio;
    numeroAleatorio = Math.random();
    numeroAleatorio = numeroAleatorio * 253;
    numeroAleatorio = Math.floor(numeroAleatorio);
    numeroAleatorio = numeroAleatorio + 2;

    document.getElementById("ip").textContent = "192.168.1." + numeroAleatorio;
}