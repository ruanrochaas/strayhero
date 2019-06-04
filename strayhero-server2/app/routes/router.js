let controllerUsers = require("../controllers/usuarios.js");
let controllerAni = require("../controllers/animais.js");

module.exports = function(app){
    app.get("/usuarios",controllerUsers.listarUsuarios);
    app.get("/usuarios/username/:username",controllerUsers.obterUsuarioPorUsername);
    app.get("/usuarios/:id",controllerUsers.obterUsuario);
    app.post("/usuarios",controllerUsers.inserirUsuario);
    app.put("/usuarios/:id",controllerUsers.updateUsuario);
    app.delete("/usuarios/:id",controllerUsers.deletarUsuario);
    app.get("/animais",controllerAni.listarAnimais);
    app.post("/animais/animaisInArray",controllerAni.obterAnimaisInArray);
    app.get("/animais/:id",controllerAni.obterAnimal);
    app.post("/animais",controllerAni.inserirAnimal);
    app.put("/animais/:id",controllerAni.updateAnimal);
    app.delete("/animais/:id",controllerAni.deletarAnimal);
}