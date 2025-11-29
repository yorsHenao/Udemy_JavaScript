let myarray2 = ["A", "A", "B", "A", "A", "A", "B", "B", "A",]

function  testoLoop() {
    for (let letra of myarray2) {
        if (letra != "B"){
            console.log(letra);
        } else {
            break;
        }
    } 
}
testoLoop()