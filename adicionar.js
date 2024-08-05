
    function adicionarResidencias(exibirMenu) {

            let rua = prompt("Digite o nome da rua: ")
            let numero = prompt("Digite o numero da residência: ")
            let proprietario = prompt("Digite o nome do propriotario: ")
            let nome = prompt ("Digite o seu nome: ")
                console.log("==> Residência adicionada com sucesso <==")
                   residencias.push({rua, numero, proprietario, nome})
                    exibirMenu()
    }
        module.exports = {adicionarResidencias}