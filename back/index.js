const app = require("./src/server.js");
const dbCon = require("./src/config/dbCon.js");

dbCon()
.then(() => {
    app.listen(3001, () => console.log("DataBase connected and server runing in port 3001"));
})
.catch(() => console.log("Connection with DataBase refused"));
