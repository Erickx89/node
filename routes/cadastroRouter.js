const express = require('express');
const router = express.Router();

const cadastroController = require('../controllers/cadastroController');

router.get('/', cadastroController.listar);
router.post('/', cadastroController.salvar);
router.get('/:id', cadastroController.buscarPorId);
router.put('/:id', cadastroController.atualizar);
router.delete('/:id', cadastroController.excluir);
router.get('/', cadastroController.listarUsuario); 

module.exports = router;
