

        function removerResidencias(exibirMenu) {
            if (residencias.length == 0) {
                console.log("Não há Residências registradas para remover.")
                    exibirMenu()
            } else {
                residencias.forEach((objeto, index) => {
                        console.log(`
                            |${index +1}.
                            |proprietario:${objeto.proprietario}
                            |Rua:${objeto.rua}
                            |nome:${objeto.nome}`)
                });
                    let cancelar = prompt('Digite o numero da residencia que deseja deletar: ')
                    let numero = parseInt(cancelar) -1
                        if (numero >= 0 && numero < residencias.length) {
                                residencias.splice(numero, 1)
                                console.log("Residencia removida com sucesso")
                            } else {
                                console.log("Numero inválido tente novamente")
                                removerResidencias(exibirMenu)
                            }
                
                exibirMenu()
            } 
               
        }
            module.exports = {removerResidencias}