const app = require("./src/server.js");
const dbCon = require("./src/config/dbCon.js");

const PORT = process.env.PORT || 3001;

dbCon()
  .then(() => {
    app.listen(PORT, () => console.log(`DataBase connected and server running on port ${PORT}`));
  })
  .catch(() => console.log("Connection with DataBase refused"));

