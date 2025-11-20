function evaluarCompra(){
    let elementorespuesta = document.getElementById("decision");
    let elementoprecio = document.getElementById("textoPrecio");
    let precio = elementoprecio.value;

    if (precio < 5) { // primera condicion
        elementorespuesta.textContent = "Comprar dos cartones";
    } else { // segunda condicion - se ejecuta si no cumple la primera
        if (precio < 8) {
            elementorespuesta.textContent = "Comprar 1 carton de leche";

        } else {elementorespuesta.textContent = "No compres nada";}
    }
   

}