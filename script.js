let numPags = 1;
let divEmFoco = null;

function criarPagina() {
    let diario = document.getElementById('diario');
    numPags++;
    diario.innerHTML += `<section class="pag" id="${numPags}">
        <div class="fora" contenteditable="true" id="${numPags}"></div>
        <div class="forabutton"><input type="button" id="${numPags}" value="x" onclick="deletarPagina('${numPags}')"></div>
    </section>`;

    
}

function deletarPagina(num) {
    let section = document.getElementById(num);
    section.remove();
}

function criarTitulo() {
    if (divEmFoco) {
        divEmFoco.innerHTML += '<h1>Title</h1>';
    }
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fora')) {
        divEmFoco = event.target;
    } else {
        divEmFoco = null;
    }
});