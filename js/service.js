
export const cep = (cep) => {
    const cep2 = parseInt(cep)
    console.log(typeof cep2)
    if (typeof cep2 === 'number') {
        return fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => {
                if (resposta.ok) {
                    return resposta.json()
                }
                throw new Error("Erro em pegar o cep")
            })
    } else {
        console.log("CEP invalido")
    }
}