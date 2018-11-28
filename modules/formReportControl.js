const divMapa = document.querySelector('.mapa');
const divSelecao = document.querySelector('.selecao');
const inputs = document.querySelectorAll('.selecao input');
const divOpcional = document.querySelector('.opcional');
let divForm = null;

export const nextForm = function(e) {
    e.preventDefault();
    divMapa.style.display = 'none';
    divSelecao.style.display = 'inline';
};

export const secondPartForm = function(e) {
    e.preventDefault();
    for (const input of inputs) {
        if (input.checked) {
            const value = input.value;
            divForm = document.querySelector(`div.${value}.opcoes`);
            div.style.display = 'inline';
            divSelecao.style.display = 'none';
        }
    }
};

export const questaoOpcional = function(e) {
    e.preventDefault();
    divForm.style.display = 'none';
    divOpcional.style.display = 'inline';
}

