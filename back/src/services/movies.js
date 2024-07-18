const Movie = require("../models/Movie");


const getMovies = async () => {
    try {
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        console.log(error);
        return [];
    };
}

const createMovie = async (title, year, director, duration, genre, rate, poster) => {
    try {
        const movie = await Movie.create({title, year, director, duration, genre, rate, poster});
        return movie;
    } catch (error) {
        console.log(error);
        return {};
    }
}

module.exports = {
    getMovies,
    createMovie
};