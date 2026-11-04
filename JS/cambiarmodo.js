alert("El JS se ejecuta correctamente");

function cambiamodo(){
    alert("La funcion se ejecuta correctamente");

    const enlace = document.getElementById("tema-oscuro");

    enlace.disabled = !enlace.disabled;

}