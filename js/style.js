function centrar(div){
    div.style.width = "100%";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";    
}

function spaceBetween(div){
    div.style.width = "100%";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center"; 
}

function divGeneralStyle(divGeneral){
    centrar(divGeneral);
    divGeneral.style.height = "100vh";
    divGeneral.style.backgroundColor = "#fffbd5";
}

function divCardStyle(divCard){
    divCard.style.width = "25%";
    divCard.style.height = "90%";
    divCard.style.backgroundColor = "azure";
    divCard.style.borderRadius = "15px";
    divCard.style.padding = "1.2rem";
}

function divCardTitleStyle(divCardTitle){
    centrar(divCardTitle);
}

function imagenStyle(imagen){
    imagen.style.width = "75%";
    imagen.style.height = "35%";
}

