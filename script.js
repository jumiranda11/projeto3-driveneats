function selecionarPrato(classBotao, classTick) {

    const pratoSelecionado = document.querySelector('.produto.prato.clicado');
    const tickAtivado = document.querySelector('.imagem-tick.prato.clicado');
    if (pratoSelecionado !== null && tickAtivado !== null) {
        pratoSelecionado.classList.remove('clicado');
        tickAtivado.classList.remove('clicado');
    }
    const seletorTick = '.'+classTick;
    const seletorBotao = '.'+classBotao;
    const prato = document.querySelector(seletorBotao);
    const tick = document.querySelector(seletorTick);

    if (prato === pratoSelecionado) {
        prato.classList.remove('clicado');
        tick.classList.remove('clicado');
    } else {
        prato.classList.add('clicado');
        tick.classList.add('clicado');
    }
}

function selecionarBebida(classBotao, classTick) {

    const pratoSelecionado = document.querySelector('.produto.bebida.clicado');
    const tickAtivado = document.querySelector('.imagem-tick.bebida.clicado');
    if (pratoSelecionado !== null && tickAtivado !== null) {
        pratoSelecionado.classList.remove('clicado');
        tickAtivado.classList.remove('clicado');
    }
    const seletorTick = '.'+classTick;
    const seletorBotao = '.'+classBotao;
    const prato = document.querySelector(seletorBotao);
    const tick = document.querySelector(seletorTick);

    if (prato === pratoSelecionado) {
        prato.classList.remove('clicado');
        tick.classList.remove('clicado');
    } else {
        prato.classList.add('clicado');
        tick.classList.add('clicado');
    }
}

function selecionarSobremesa(classBotao, classTick) {

    const pratoSelecionado = document.querySelector('.produto.sobremesa.clicado');
    const tickAtivado = document.querySelector('.imagem-tick.sobremesa.clicado');
    if (pratoSelecionado !== null && tickAtivado !== null) {
        pratoSelecionado.classList.remove('clicado');
        tickAtivado.classList.remove('clicado');
    }
    const seletorTick = '.'+classTick;
    const seletorBotao = '.'+classBotao;
    const prato = document.querySelector(seletorBotao);
    const tick = document.querySelector(seletorTick);

    if (prato === pratoSelecionado) {
        prato.classList.remove('clicado');
        tick.classList.remove('clicado');
    } else {
        prato.classList.add('clicado');
        tick.classList.add('clicado');
    }
}

function mudarBotaoFinalizar(){
    const pratoSelecionado = document.querySelector('.produto.prato.clicado');
    const sobremesaSelecionada = document.querySelector('.produto.sobremesa.clicado');
    const bebidaSelecionada = document.querySelector('.produto.bebida.clicado');
    let botaoFinalizar = document.querySelector('.botao-finalizar');
    let textoBotaoFinalizar = document.querySelector('.texto-botao-finalizar');
    let link = encodeURIComponent("Olá Julita, muito legal!");

    if (pratoSelecionado !== null && sobremesaSelecionada !== null && bebidaSelecionada !== null) {
        textoBotaoFinalizar.innerHTML = "Fechar pedido";
        textoBotaoFinalizar.classList.add('selecionavel');
        botaoFinalizar.classList.add('selecionavel');
        botaoFinalizar.href = `https://wa.me/5565996243311?text=${link}`;

}
}
