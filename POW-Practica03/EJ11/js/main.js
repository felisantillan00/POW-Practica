function detectarNavegador(){
    const navegador = navigator.userAgent;
    
    document.getElementById("navegador").innerText = "Estas usando: " + navegador;
}

function obtenerResolucionPantalla(){
    const ancho = screen.width;
    const alto = screen.height;

    document.getElementById("resolucion").innerText = `Resolucion de pantalla: ${ancho} x ${alto}`;
}

detectarNavegador();
obtenerResolucionPantalla();