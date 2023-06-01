require("./mongodb");
const mongoose = require("mongoose");
const cadastroModel = require("../models/cadastroModel");
const cadastros = require("./cadastros.json");

async function carregarDados() {
    try {
        await cadastroModel.deleteMany({});
        for (const cadastro of cadastros) {
            await cadastroModel.create(cadastro);
        }
        console.log("Carga  feita!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();