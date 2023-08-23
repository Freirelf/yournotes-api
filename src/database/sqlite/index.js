const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");
const path = require("path"); // resolução do endereços de acordo com o ambiente 

async function sqliteConnection() {
  const database = await sqlite.open({
    filename: path.resolve(__dirname, "..", "database.db"),
    driver: sqlite3.Database  //drive de conexão. 
  })

  return database;
}

module.exports = sqliteConnection;