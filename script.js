let numPags = 1;
let vall = false
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


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fora')) {
        divEmFoco = event.target;
    } else {
        divEmFoco = null;
    }

});