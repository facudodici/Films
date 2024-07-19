const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect("mongodb+srv://facundomartinodev:aUniogQIdMWRHa4S@cluster0.usagcyd.mongodb.net/PT20A?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Conexión exitosa a la base de datos.");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
};

module.exports = dbCon;
