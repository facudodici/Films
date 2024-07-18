const axios = require("axios");

function createMovie(){

    const titleInput = document.getElementById("title-input");
    const yearInput = document.getElementById("year-input");
    const directorInput = document.getElementById("director-input");
    const durationInput = document.getElementById("duration-input");
    const genreInput = document.getElementById("genre-input");
    const rateInput = document.getElementById("rate-input");
    const posterInput = document.getElementById("poster-input");

    if(!titleInput.value || !yearInput.value || !directorInput.value ||!durationInput.value || !genreInput.value || !rateInput.value || !posterInput.value){
        alert("Faltan completar datos");
        return;
    };

    axios.post("http://localhost:3001/movies", {
        title: titleInput.value,
        year: yearInput.value,
        director: directorInput.value,
        duration: durationInput.value,
        genre: genreInput.value.split(","),
        rate: rateInput.value,
        poster: posterInput.value
    }).then(() => alert("Pelicula creada exitosamente"))
    .catch(() => alert("Hubo un problema al crear la pelicula"));
};

function cleanInputs(){

    const titleInput = document.getElementById("title-input");
    const yearInput = document.getElementById("year-input");
    const directorInput = document.getElementById("director-input");
    const durationInput = document.getElementById("duration-input");
    const genreInput = document.getElementById("genre-input");
    const rateInput = document.getElementById("rate-input");
    const posterInput = document.getElementById("poster-input");
    
    titleInput.value = "";
    yearInput.value = "";
    directorInput.value = "";
    durationInput.value = "";
    genreInput.value = "";
    rateInput.value = "";
    posterInput.value = "";
}

module.exports = { createMovie, cleanInputs };