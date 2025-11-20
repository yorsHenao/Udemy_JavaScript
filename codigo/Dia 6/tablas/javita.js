function multiplicar(){
    //obtener el numero
    let elementotextotabla = document.getElementById("textotabla");
    let textoNumeroTabla = elementotextotabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //obtener la tabla
    let elementoTablaMultiplicar = document.getElementById("listatabla");

    //producitr y mostrar resultados

    for (x=1; x<=10; x++){
        //calcular resultado
        let numeroresultado = numeroTabla * x;

        //Armar string con resultado
        let textoResultado = numeroTabla + " por " + x + " Es igual a " + numeroresultado

        //crear un elemento de la lista
        let itemLista = document.createElement("li"); // crea un elemento li lo cual es una lista desordenada
        itemLista.innerText =  textoResultado; // agrega el texto que se tiene de la variable textoResultado
        elementoTablaMultiplicar.appendChild(itemLista) // inserta dentro de un <ul> en html

    }
}