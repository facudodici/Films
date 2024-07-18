const app = require("./src/server.js");
const dbCon = require("./src/config/dbCon.js");

dbCon()
.then(() => {
    const port = process.env.PORT || 3001; // Usar el puerto proporcionado por Vercel o 3001 en desarrollo
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
.catch(() => console.log("Connection with DataBase refused"));