const moviesService = require("../services/movies");

const movieController = async (req, res) => {
  try {
    const allMovies = await moviesService.getMovies();
    res.status(200).json(allMovies);
  } catch (error) {
    res.status(404).json({
      error: "ERROR",
    });
  }
};

const createMovie = async (req, res) => {
  const { title, year, director, duration, genre, rate, poster } = req.body;

  if (!title || !year || !director || !duration || !genre || !rate || !poster) {
    res.status(400).json({
      message: "Falta informacion para crear la pelicula",
    });
    return;
  }
  try {
    const movie = await moviesService.createMovie(
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster
    );
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { movieController, createMovie };
