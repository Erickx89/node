const cadastroModel = require('../models/cadastroModel');

class CadastroController {
    async salvar(req, res) {
        let cadastro = req.body;
        const max = await cadastroModel.findOne({}).sort({ codigo: -1 });
        cadastro.id = max == null ? 1 : max.id + 1;
        const resultado = await cadastroModel.create(cadastro);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await cadastroModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        const resultado = await cadastroModel.findOne({ 'id': id });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const _id = String((await cadastroModel.findOne({ 'id': id }))._id);
        await cadastroModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.id;
        const _id = String((await cadastroModel.findOne({ 'id': id }))._id);
        await cadastroModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new CadastroController();
