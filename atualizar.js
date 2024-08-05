
    const {listarResidencias} = require('./listar.js')

        function atualizarResidencias(exibirMenu) {
            listarResidencias()
                let numero = prompt ("Digite o numero da Residencia que deseja atualizar")
                    let index = parseInt(numero) -1
                        if (index < 0 || index > residencias.length) {
                            console.log("Residencia não encontrada, tente novamente: ")
                                atualizarResidencias()
                        } else {
                            console.log("==> Atualizando dados <==")
                            let rua = prompt ("Nome da rua: ")
                            let proprietario = prompt ("Nome do proprietario: ")
                            let numero = prompt ("Numero da residencia: ")
                            let nome = prompt ("Digite seu nome: ")
                            residencias[index] = {rua, proprietario, numero, nome}
                                console.log("==> Residência atualizada com sucesso <==")
                        }
                            exibirMenu()
                }

                module.exports = {atualizarResidencias}