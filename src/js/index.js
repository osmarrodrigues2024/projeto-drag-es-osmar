

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        newFunction();
        botao.classList.add("selecionado");

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);

        esconderInformacoesAtivas();

        mostrarInformacoes(indice);
    });
});


function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}
function newFunction() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
