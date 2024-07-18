const axios = require("axios");
const createCard = require("./renderCards.js");
const  { createMovie, cleanInputs } = require("./createMovie.js");

//$.get("https://students-api.up.railway.app/movies", (data) => {
//    data.forEach(movie => createCard(movie));
//});


// ! Promesas !
//axios.get("https://students-api.up.railway.app/movies")
//.then((res) => {
//    res.data.forEach(movie => createCard(movie));
//})
//.catch((error) => {
//    console.log(error);
//});


// ! ASYNC/AWAIT !
const getMovies = async () => {
    try {
        const res = await axios.get("http://localhost:3001/movies");
        res.data.forEach(movie => createCard(movie));
    } catch (error) {
        console.log(error.message);
    }
;}
getMovies();

const sendButton = document.getElementById("sendButton");
sendButton?.addEventListener("click", (event) => {
    event.preventDefault();
    createMovie();
    cleanInputs();
});

const cleanButton = document.getElementById("cleanButton");
cleanButton?.addEventListener("click", (event) => {
    event.preventDefault();
    cleanInputs();
});