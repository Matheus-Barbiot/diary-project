let numPags = 1;
let vall = false
let divEmFoco = null;

function criarPagina() {
    let diario = document.getElementById('diario');
    numPags++;
    let gerenciador = document.getElementById('gerenciador')
    diario.innerHTML += `<section class="pag" id="${numPags}">
        <div class="fora" contenteditable="true" id="${numPags}"></div>
        <div class="forabutton"><input type="button" id="${numPags}" value="x" onclick="deletarPagina(${numPags})"></div>
    </section>`;
    gerenciador.innerHTML += `<div class="pag${numPags}" contenteditable="true">pag${numPags} <input type="button" value="o" id="fixador" class="botaoGerenciador" class="pag${numPags}" onclick="scrolarAte(${numPags})"></button><input type="button" value="x" class="botaoGerenciador" class="pag${numPags}" onclick="deletarPagina(${numPags})"></div>`
    
}

function deletarPagina(num) {
    let section = document.getElementById(num);
    let inputGerenciador = document.getElementsByClassName(`pag${num}`);
    
    // Converta a coleção em um array para iterar sobre ela
    let inputsArray = Array.from(inputGerenciador);
    
    // Remova os elementos
    inputsArray.forEach(function (input) {
        input.remove();
    });

    numPags--
    section.remove();
}

function criarTitulo(h) {
    if (divEmFoco) {
        divEmFoco.innerHTML += `<${h}>Title</${h}>`;
    }
}

let isEditable = false; // Inicializa como não editável

function applyBold() {
    let selection = document.getSelection();
    let range = selection.getRangeAt(0);

    if (range) {
        let boldSpan = document.createElement('strong');
        boldSpan.textContent = range.toString();
        boldSpan.setAttribute('contenteditable', isEditable);

        // Alterna o estado de edição ao clicar no elemento
        boldSpan.addEventListener('click', function () {
            isEditable = !isEditable;
            boldSpan.setAttribute('contenteditable', isEditable);
        });

        boldSpan.addEventListener('mouseout', function () {
            boldSpan.addEventListener('click', function () {
                boldSpan.setAttribute('contenteditable', true);

                if (isEditable === true) {
                    isEditable = false
                }
            })
        });

        range.deleteContents();
        range.insertNode(boldSpan);
    }
}
    

function applyItalic() {
    let selection = document.getSelection();
    let range = selection.getRangeAt(0);

    if (range) {
        let ItalicSpan = document.createElement('em');
        ItalicSpan.textContent = range.toString();
        ItalicSpan.addEventListener('mouseover', function () {
            ItalicSpan.setAttribute('contenteditable', 'true')
        })

        ItalicSpan.addEventListener('click', function () {
            isEditable = !isEditable;
            ItalicSpan.setAttribute('contenteditable', isEditable);
        });

        ItalicSpan.addEventListener('mouseout', function () {
            ItalicSpan.addEventListener('click', function () {
                ItalicSpan.setAttribute('contenteditable', true);

                if (isEditable === true) {
                    isEditable = false
                }
            })
        });
        range.deleteContents();
        range.insertNode(ItalicSpan);

        selection.removeAllRanges();
    }
}

function scrolarAte(num) {
    var element = document.getElementById(num);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
}

function substituir(event, func1, func2, element) {
    let element1 = document.getElementById(element);
    element1.removeEventListener(event, func1);
    element1.addEventListener(event, func2);
}

function mostrarTitulos() {
    let titles = document.getElementById('title');
    titles.style.display = 'block';
    substituir('click', mostrarTitulos, esconderTitulos, 'Title1');
}

function esconderTitulos() {
    let titles = document.getElementById('title');
    titles.style.display = 'none';
    substituir('click', esconderTitulos, mostrarTitulos, 'Title1');
}


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fora')) {
        divEmFoco = event.target;
    } else {
        divEmFoco = null;
    }

});