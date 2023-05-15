/* Objetivo 1 - Quando clicar no botão de troca de tema, a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua. */

// Passo 1 - Pegar no JS o elemento HTML correspondente ao botão de troca de tema.

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// Passo 2 - Dar um jeito de pegar no JS o elemento HTML corresponde ao body.

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// Passo 3 - Dar um jeito de identificar (console.log) o clique do usuário no botão de troca de tema.

botaoAlterarTema.addEventListener("click", () => {

    // Passo 6 - Verificar se o body já tem a classe modo-escuro.
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    // O ADD e remove, foram retirados em troca do toogle colocado antes da condição.
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        // Passo 7 - Remover a classe do modo-escuro do body.
        //body.classList.remove("modo-escuro");

        // Passo 8 - Trocar a imagem do botão de alterar tema pra sol.
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        // Passo 4 - Adicionar a classe modo-escuro no body.
        //body.classList.add("modo-escuro");

        // Passo 5 - Trocar a imagem do botão de alterar tema pra lua.

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");

    }
    /* objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar pro modo claro e mudar a imagem pro sol. */




});