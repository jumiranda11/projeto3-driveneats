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
   
    if (pratoSelecionado !== null && sobremesaSelecionada !== null && bebidaSelecionada !== null) {
        textoBotaoFinalizar.innerHTML = "Fechar pedido";
        textoBotaoFinalizar.classList.add('selecionavel');
        botaoFinalizar.classList.add('selecionavel');
        botaoFinalizar.href = `https://wa.me/5565996243311?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%0a -%20Prato%3A%20Frango%20Yin%20Yang%0a -%20Bebida%3A%20Coquinha%20Gelada%0a -%20Sobremesa%3A%20Pudim%0a Total%3A%20R%24%2027.70`;
}
}
