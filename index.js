
    const prompt = require("prompt-sync")()
    const {exibirMenu} = require('./menu.js')

        let residencias = []

    global.prompt = prompt
    global.residencias = residencias

    exibirMenu()