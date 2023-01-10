var canvas = new fabric.Canvas("myCanvas");
var x = 400;
var y = 500;
var alto = 30;
var ancho = 30;
var jugador = "";
var bloque = "";
function actualizarJugador() {
    fabric.Image.fromURL("dream.png", function (imagen) {
        jugador = imagen;
        jugador.scaleToWidth(150);
        jugador.scaleToHeight(140);
        jugador.set({
            top: y,
            left: x
        });
        canvas.add(jugador);
    })
}
window.addEventListener("keydown", teclaPresionada);
function teclaPresionada(e) {
    tecla = e.keyCode;
    if (tecla == "38" && y > 0) {//arriba
        y = y - alto;
        canvas.remove(jugador);
        actualizarJugador();
    }
    if (tecla == "40" && y < 1060) {//abajo
        y = y + alto;
        canvas.remove(jugador);
        actualizarJugador();
    }
    if (tecla == "37" && x > 0) {//izquierda
        x = x - ancho;
        canvas.remove(jugador);
        actualizarJugador();
    }
    if (tecla == "39" && x < 1400) {//derecha
        x = x + ancho;
        canvas.remove(jugador);
        actualizarJugador();
    }
    if (tecla == "49") {
        actualizarBloque("cloud.jpg");
    }
    if (tecla == "50") {
        actualizarBloque("roof.jpg");
    }
    if (tecla == "51") {
        actualizarBloque("unique.png");
    }
    if (tecla == "70") {
        actualizarBloque("fox.png");
    }
    if (tecla == "52") {
        actualizarBloque("ground.png");
    }
    if (tecla == "80") {
        actualizarBloque("pollito.png");
    }
    if (tecla == "53") {
        actualizarBloque("trunk.jpg");
    }
    if (tecla == "54") {
        actualizarBloque("dark_green.png");
    }
    if (tecla == "55") {
        actualizarBloque("light_green.png");
    }
    if (tecla == "56") {
        actualizarBloque("wall.jpg");
    }
    if (tecla == "57") {
        actualizarBloque("yellow_wall.png");
    }
    if (tecla == "67") {
        actualizarBloque("aMimir.png");
    }
    if (e.shiftKey && tecla == "9") {
        ancho = ancho + 10;
        alto = alto + 10;
        document.getElementById("ancho").innerHTML = "Current Width = " + ancho;
        document.getElementById("alto").innerHTML = " Current Height = " + alto;
    }
    if (e.shiftKey && tecla == "8") {
        ancho = ancho - 10;
        alto = alto - 10;
        document.getElementById("ancho").innerHTML = "Current Width = " + ancho;
        document.getElementById("alto").innerHTML = " Current Height = " + alto;
    }
}
function actualizarBloque(cubo) {
    fabric.Image.fromURL(cubo, function (imagen) {
        bloque = imagen;
        bloque.scaleToWidth(ancho);
        bloque.scaleToHeight(alto);
        bloque.set({
            top: y,
            left: x
        });
        canvas.add(bloque);
    })

}