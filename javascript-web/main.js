const listaDeTeclas = document.querySelectorAll('.tecla');

// Funcao para rodar o audio na pagina.
function tocarAudio(idElementAudio) {
	const elemento = document.querySelector(idElementAudio);

	if (elemento != null && elemento.localName === 'audio') {
		elemento.play();
	} else {
		alert('elemento nao encontrado ou seletor invalido');
	}
}

// Usando o FOR para correr a lista de itens
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
	const instrumento = listaDeTeclas[contador].classList[1];
	const tecla = listaDeTeclas[contador];
	const idElementAudio = `#som_${instrumento}`;

	tecla.onclick = function () {
		tocarAudio(idElementAudio);
	};

	tecla.onkeydown = function (evento) {
		if (evento.code === 'Espaco' || evento.code === 'Enter') {
			tecla.classList.add('ativa');
		}
	};

	tecla.onkeyup = function () {
		tecla.classList.remove('ativa');
	};
}

// USANDO O Enquanto
// let contador = 0;

// while (contador < listaDeTeclas.length) {
// 	const instrumento = listaDeTeclas[contador].classList[1];

// 	listaDeTeclas[contador].onclick = function () {
// 		tocarAudio(`#som_${instrumento}`);
// 	};
// 	contador = contador + 1;
// }

// SELECIONANDO ITEM A ITEM (PIOR CENARIO)
// document.querySelector('.tecla_pom').onclick = function () {
// 	document.querySelector('#som_tecla_pom').play();
// };

// document.querySelector('.tecla_clap').onclick = function () {
// 	document.querySelector('#som_tecla_clap').play();
// };

// document.querySelector('.tecla_tim').onclick = function () {
// 	document.querySelector('#som_tecla_tim').play();
// };

// document.querySelector('.tecla_puff').onclick = function () {
// 	document.querySelector('#som_tecla_puff').play();
// };

// document.querySelector('.tecla_splash').onclick = function () {
// 	document.querySelector('#som_tecla_splash').play();
// };

// document.querySelector('.tecla_toim').onclick = function () {
// 	document.querySelector('#som_tecla_toim').play();
// };

// document.querySelector('.tecla_psh').onclick = function () {
// 	document.querySelector('#som_tecla_psh').play();
// };

// document.querySelector('.tecla_tic').onclick = function () {
// 	document.querySelector('#som_tecla_tic').play();
// };

// document.querySelector('.tecla_tom').onclick = function () {
// 	document.querySelector('#som_tecla_tom').play();
// };
