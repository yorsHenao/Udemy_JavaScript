function consultarPrecio() {
    let elementoRespuesta = document.getElementById("Textoprecio");
    let elementofruta = document.getElementById("numeroFruta");
    let fruta = elementofruta.value;
    
    switch(fruta)
    {
        case "1":
            elementoRespuesta.textContent = "$8.000"
            break;
        
        case "2":
            elementoRespuesta.textContent = "$6.000"
            break;
        
        case "3":
            elementoRespuesta.textContent = "$4.000"
            break;
        
        case "4":
            elementoRespuesta.textContent = "$3.000"
            break;
        
        case "5":
            elementoRespuesta.textContent = "$4.000"
            break;
    }
    
}