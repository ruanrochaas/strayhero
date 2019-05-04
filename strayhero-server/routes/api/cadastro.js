const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

router.get('/', async (req, res) => {
    const usuarios = await loadUsuarios();
    res.send(await usuarios.find({}).toArray());
});

router.post('/', async (req, res) => {
    const usuarios = await loadUsuarios();
    await usuarios.insertOne({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    res.status(201).send();
});

async function loadUsuarios(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://strayhero:2IgtI3ucnm6YM7tB@cluster0-tppdt.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
    return client.db('strayhero').collection('usuarios');
}

module.exports = router;