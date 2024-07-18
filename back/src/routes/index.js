const {Router} = require("express");
const moviesRouters = require("./moviesRouters");

const router = Router(); //creamos el enrutador

router.use("/movies", moviesRouters); //si el entry point de la solicitud es "/movies" la envia a movieRouter 

module.exports = router;