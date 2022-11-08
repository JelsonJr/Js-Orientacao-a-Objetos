import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User('Mariana', 'm@m.com', "27/07/2004");

console.log(novoUser.exibirInfos());