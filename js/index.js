//let elementsHTML = [];
document.body.style.margin = "0";
document.body.style.padding = "0";


let divGeneral = document.createElement("div");
divGeneralStyle(divGeneral);

let divCard = document.createElement("div");
divCardStyle(divCard);

let divCardTitle = document.createElement("div");
let zona = document.createElement("h1");
divCardTitleStyle(divCardTitle);

divCardTitle.appendChild(zona);

//imagenes
let divImagen= document.createElement("div");
centrar(divImagen);
let imagen = document.createElement("img")
imagenStyle(imagen);
divImagen.appendChild(imagen);

// Etiquetas <p> de los valores a extraer
let divDescripcion = document.createElement("div");
centrar(divDescripcion);
let descripcion = document.createElement("h2");
divDescripcion.appendChild(descripcion);
/// Temperatura
let divTemperatura = document.createElement("div");
spaceBetween(divTemperatura);

let temperatura = document.createElement("p")
temperatura.innerText = "Temperatura: ";
let valorTemperatura = document.createElement("p");

divTemperatura.appendChild(temperatura);
divTemperatura.appendChild(valorTemperatura);

/// Sensacion
let divSensacion = document.createElement("div");
spaceBetween(divSensacion);

let sensacion = document.createElement("p")
sensacion.innerText = "Sensacion térmica: ";
let valorSensacion = document.createElement("p");

divSensacion.appendChild(sensacion);
divSensacion.appendChild(valorSensacion);

/// Nubes
let divNubes = document.createElement("div");
spaceBetween(divNubes);

let nubes = document.createElement("p")
nubes.innerText = "Nubes: ";
let valorNubes = document.createElement("p");

divNubes.appendChild(nubes);
divNubes.appendChild(valorNubes);

/// Humedad
let divHumedad = document.createElement("div");
spaceBetween(divHumedad);

let humedad = document.createElement("p")
humedad.innerText = "Humedad: ";
let valorHumedad = document.createElement("p");

divHumedad.appendChild(humedad);
divHumedad.appendChild(valorHumedad);


divCard.appendChild(divCardTitle);
divCard.appendChild(divImagen);
divCard.appendChild(divDescripcion);
divCard.appendChild(divTemperatura);
divCard.appendChild(divSensacion);
divCard.appendChild(divNubes);
divCard.appendChild(divHumedad);

divGeneral.appendChild(divCard);

navigator.geolocation.getCurrentPosition(function(position) {
    //haz_algo(position.coords.latitude, position.coords.longitude);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    fetch(
       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={part}&appid=${api_key}&units=metric`
    )
        .then((response) => response.json())
        .then((data) => {
            let timeZone = data.timezone;
            zona.innerText = `${(timeZone === 'America/Mexico_City') ? "CDMX" : "México"}`;
            let icon = data.current.weather[0].icon;
            imagen.src = `./icons/${icon}.png`;
            let description = data.current.weather[0].description;
            descripcion.innerText = (
                (description === "few clouds") ? "Con pocas nubes"
                :(description === "scattered clouds") ? "Con nubes dispersas"
                :(description === "broken clouds") ? "Lleno de nubes dispersas" 
                :(description === "overcast clouds")? "Cubierto de nubes" : "errorDeTraduccion"
            );
            //descripcion.innerText = description;
            let temp = data.current.temp;
            valorTemperatura.innerText = `${temp}°C`;
            let sensation = data.current.feels_like;
            valorSensacion.innerText = `${sensation}°C`; 
            let clouds = data.current.clouds;
            valorNubes.innerText = `${clouds}%`;
            let humidity = data.current.humidity;
            valorHumedad.innerText = `${humidity}%`; 
        });
});


document.body.appendChild(divGeneral);