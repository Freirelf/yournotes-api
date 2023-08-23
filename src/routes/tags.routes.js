const { Router } = require("express");

const TagsController = require("../controllers/TagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRoutes = Router();

const tagsController = new TagsController(); // quando uso classe, eu tenho que instanciar ele na memória, ou seja, reservar um em espaço em memória para a minha classe.

tagsRoutes.get("/", ensureAuthenticated,  tagsController.index)

module.exports = tagsRoutes;