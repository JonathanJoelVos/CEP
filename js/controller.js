import { cep } from "./service.js";

const inputCEP = document.querySelector("#cep");
const inputEndereco = document.querySelector("#endereco");
const inputCompemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputLocalidade = document.querySelector("#cidade");
const inputEstado = document.querySelector("#estado");

(async () => {
    inputCEP.addEventListener("input", async function (event) {
        if (this.value.length == 8) {
            let valor = this.value;
            const objeto = await cep(valor);
            inputEndereco.value = objeto.logradouro;
            inputCompemento.value = objeto.complemento;
            inputBairro.value = objeto.bairro;
            inputLocalidade.value = objeto.localidade;
            inputEstado.value = objeto.uf;
        }
    })
})()