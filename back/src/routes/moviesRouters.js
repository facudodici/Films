const {Router} = require("express");
const moviesController = require("../controllers/moviesController");

const moviesRouter = Router(); //creamos el enrutador de movies (moviesRouter)

moviesRouter.get("/", moviesController.movieController); //envia la solicitud tipo GET al controlador moviesController
moviesRouter.post("/", moviesController.createMovie);

module.exports = moviesRouter;


