const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    nascimento: Date, 
    telefone: Number,
    endereco: String,
    cidade: String,
    estado: String,
});

module.exports = mongoose.model('cadastros', cadastroSchema);
