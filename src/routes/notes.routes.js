const { Router } = require("express");

const NotesController = require("../controllers/NotesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router();

const notesController = new NotesController(); // quando uso classe, eu tenho que instanciar ele na memória, ou seja, reservar um em espaço em memória para a minha classe.

notesRoutes.use(ensureAuthenticated)

notesRoutes.get("/", notesController.index)
notesRoutes.post("/", notesController.create)
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes;