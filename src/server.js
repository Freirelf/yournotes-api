require("express-async-errors");
require("dotenv/config");

const AppError = require("./utils/AppError");
const uploadConfig = require("./config/upload")

const migrationsRun = require("./database/sqlite/migrations")

const cors = require("cors")
const express = require('express');
const routes = require("./routes");

migrationsRun();

const app = express();
app.use(cors())
app.use(express.json())

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);


app.use((error, request, response, next) => {
  if(error instanceof AppError) { //erro gerado pelo cliente.
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.log(error);

  return response.status(500).json({ //erro gerado pelo servidor. 
    status: "error",
    message: "Internal server error"
  })
})

const PORT =  process.env.SERVER_PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}.`));
