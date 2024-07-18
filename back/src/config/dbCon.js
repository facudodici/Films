const mongoose = require("mongoose");
require('dotenv').config();


const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        console.log("Conexión exitosa a la base de datos.");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};

module.exports = dbCon;
