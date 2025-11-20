/*function multiplicar(numero){
for(x=1; x<=10; x++){
    let resultado = numero * x ;
    console.log(resultado)
}
}
multiplicar(8)
*/
/*
 let vidas = 5;

            do{
                console.log("Vidas " + vidas );
                vidas--;
            } while (vidas > 10)
*/
/*
function testLoop(vueltas){
    let contador = 0;

    
    do {
        console.log("Vuelta " + contador);
        contador ++;
        
    } while (contador <= vueltas );
}

testLoop(2)
*/

 /*function testLoop(numero){
    let x = 1;
    
    do{
        let resultado = numero * x;
        console.log(resultado);
        x++;
        
    } while (x <= 10);
}

testLoop(1) */

function testLoop (vueltas){
    let contador = 0;
    while (contador < vueltas){
    console.log ("Vuelta + " + contador);
    contador++;
    }

}

function testin (parametro) {
    
    while (parametro < 10){
        console.log(parametro);
        parametro++;
    }
} 
testin(6)