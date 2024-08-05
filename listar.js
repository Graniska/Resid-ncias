
    function listarResidencias() {
        if (residencias.length == 0) {
            console.log ("Nenhuma residencia foi registrada")
        } else {
            residencias.forEach((objeto, index) => {
                    console.log(`
                        ${index +1}. 
                        |Proprietario:${objeto.proprietario}
                        |Rua:${objeto.rua}
                        |Nome:${objeto.nome}
                        |Numero:${objeto.numero}`)
            });
        }
    }
        module.exports = {listarResidencias}