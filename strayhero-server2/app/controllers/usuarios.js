var Usuario = require('../models/usuario.js');

module.exports.listarUsuarios = function (req, res) {
    let promise = Usuario.find().exec();
    promise.then(
        function (usuarios) {
            res.json(usuarios)
        }
    ).catch(
        function (erro) {
            res.status(500).end();
        }
    );
};

module.exports.inserirUsuario = function (req, res) {
    let promise = Usuario.create(req.body);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
};

module.exports.obterUsuarioPorUsername = function (req, res) {
    var username = req.params.username;
    let promise = Usuario.findOne({username: username}).exec();
    promise.then(
        function (usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
};

module.exports.obterUsuario = function (req, res) {
    var id = req.params.id;
    let promise = Usuario.findById(id);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
}

module.exports.updateUsuario = function (req, res) {
    var id = req.params.id;
    let promise = Usuario.findByIdAndUpdate({_id:id},req.body);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
}

module.exports.deletarUsuario = function (req, res) {
    var id = req.params.id;
    let promise = Usuario.deleteOne({_id:id});
    promise.then(
        function (usuario) {
            res.status(201).json(usuario);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
}