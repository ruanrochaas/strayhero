var Animal = require('../models/animal.js');

module.exports.listarAnimais = function (req, res) {
    let promise = Animal.find().exec();
    promise.then(
        function (animais) {
            res.json(animais)
        }
    ).catch(
        function (erro) {
            res.status(500).end();
        }
    );
};

module.exports.inserirAnimal = function (req, res) {
    let promise = Animal.create(req.body);
    promise.then(
        function (animal) {
            res.status(201).json(animal);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
};

module.exports.obterAnimal = function (req, res) {
    var id = req.params.id;
    let promise = Animal.findById(id);
    promise.then(
        function (animal) {
            res.status(201).json(animal);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
}

module.exports.updateAnimal = function (req, res) {
    var id = req.params.id;
    let promise = Animal.findByIdAndUpdate({_id:id},req.body);
    promise.then(
        function (animal) {
            res.status(201).json(animal);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
}

module.exports.deletarAnimal = function (req, res) {
    var id = req.params.id;
    let promise = Animal.deleteOne({_id:id});
    promise.then(
        function (animal) {
            res.status(201).json(animal);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
}

module.exports.obterAnimaisInArray = function (req, res) {
    var animaisIds = req.body;
    let promise = Animal.find({_id: { $in: animaisIds}});
    promise.then(
        function (animaisObjs) {
            res.status(201).json(animaisObjs);
        }
    ).catch(
        function (erro) {
            res.status(500).json(erro);
        }
    );
}