
    const {adicionarResidencias} = require('./adicionar.js')
    const {atualizarResidencias} = require('./atualizar.js')
    const {listarResidencias} = require('./listar.js')
    const {removerResidencias} = require ('./remover.js')

        function exibirMenu() {
            console.log("=========RESIDENCIAL=MENU=========" +
                "\n |1. ADICIONAR " +
                "\n |2. LISTAR " +
                "\n |3. ATUALIZAR " +
                "\n |4. REMOVER " +
                "\n |5. SAIR" 
            )   
                let opcao = prompt ("==> O que gostaria de fazer hoje? ")

                    switch (opcao) {
                        case "1":
                            adicionarResidencias(exibirMenu)
                            break;
                            case"2":
                            listarResidencias()
                            exibirMenu()
                            break;
                            case "3":
                            atualizarResidencias(exibirMenu)
                            break;
                            case "4":
                            removerResidencias(exibirMenu)
                            break;
                            case "5":
                            console.log("==> SESSÃO ENCERRADA <==")
                            return
                            break;
                    
                        default:
                            console.log("Opcão inválida, tente novamente ")
                            exibirMenu()
                            break;
                    }

        }
            module.exports = {exibirMenu}