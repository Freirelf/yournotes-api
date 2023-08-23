const { Router } = require("express");
const multer = require("multer")
const uploadConfig = require("../config/upload")

const UsersControllers = require("../controllers/UserController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRouter = Router();
const upload = multer(uploadConfig.MULTER)

const usersControllers = new UsersControllers(); // quando uso classe, eu tenho que instanciar ele na memória, ou seja, reservar um em espaço em memória para a minha classe.
const userAvatarController = new UserAvatarController();

usersRouter.post("/", usersControllers.create)
usersRouter.put("/", ensureAuthenticated, usersControllers.update)
usersRouter.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRouter;