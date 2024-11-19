const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contador = document.querySelectorAll(".aba");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const prazoFinal = new Date("2024-12-13T12:25:00");

function mostrarRegressivo(prazoFinal){
    let tempoAtual = new Date();
	let tempoRegressivo = prazoFinal - tempoAtual;
    let segundos = Math.floor(tempoRegressivo/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoRegressivo>0){
	return dias + " dias, " + horas + " horas, " + minutos + " minutos, " + segundos + " segundos.";
    }
    else{
        return "Prazo finalizado!"
    }
}

function atualizaCronometro(){
    contador[3].textContent = mostrarRegressivo(prazoFinal);
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();