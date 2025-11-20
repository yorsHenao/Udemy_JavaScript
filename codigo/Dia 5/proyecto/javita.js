function recomendar(genero) {
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");
    
    switch(genero)
    {
        case "comedia":
        if (edad < 13) {
            recomendacion.textContent = "son huevos";
        } else {
            if (edad < 16) {
                recomendacion.textContent = "The Simpson";
            } else {
                recomendacion.textContent  ="la mascara";
            }
        }
        break;

        case "drama":
        if (edad < 13) {
            recomendacion.textContent = "Casa blanca";
        } else {
            if (edad < 16) {
                recomendacion.textContent = "The Shawhank";
            } else {
                recomendacion.textContent  ="Taxi driver";
            }
        }
        break;

        case "musical":
        if (edad < 13) {
            recomendacion.textContent = "la la land";
        } else {
            if (edad < 16) {
                recomendacion.textContent = "el guitarrista";
            } else {
                recomendacion.textContent  ="por amor";
            }
        }
        break;

        case "crimen":
        if (edad < 13) {
            recomendacion.textContent = "muerte en la casa blanca";
        } else {
            if (edad < 16) {
                recomendacion.textContent = "el policia";
            } else {
                recomendacion.textContent  ="perros y gatos";
            }
        }
        break;
    }

}