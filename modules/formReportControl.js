const divMapa = document.querySelector('.mapa');
const divSelecao = document.querySelector('.selecao');
const inputs = document.querySelectorAll('.selecao input');
const divOpcional = document.querySelector('.opcional');
const divOpcionais = document.querySelector('.questoes_opcionais');
const buttonForm = document.querySelector('div.envia');

let divForm = null;

export const functions = {
    flagForm: 0,
    firstForm: function() {
        // e.preventDefault();
        divMapa.className = 'd-none';
        divSelecao.style.display = 'flex';
        this.flagForm++;
    },
    secondForm: function() {
        // e.preventDefault();
        for (const input of inputs) {
            if (input.checked) {
                const value = input.value;
                divForm = document.querySelector(`div.${value}.opcoes`);
                divSelecao.style.display = 'none';
                divForm.style.display = 'flex';
                this.flagForm++;
            }
        }
    },
    thirdForm: function() {
        divForm.style.display = 'none';
        divOpcional.className = '.opcional.w-100.d-flex.flex-column';
        buttonForm.style.display = 'none';
        this.flagForm++;
    },
    lastForm: function() {
        divOpcionais.className = 'd-flex';
        divOpcionais.className =
            '.questoes_opcionais.w-100.list-group.d-flex.flex-columun';
    },
    returnForm: function() {
        // e.preventDefault();
        if (this.flagForm === 1) {
            divMapa.className = 'd-flex.flex-column.align-items-center';
            divSelecao.style.display = 'none';
            this.flagForm--;
        } else if (this.flagForm === 2) {
            divForm = document.querySelectorAll(`div.opcoes`);
            for (const div of divForm) {
                div.style.display = 'none';
            }
            divSelecao.style.display = 'flex';
            this.flagForm--;
        }
    }
};

// export const questaoOpcional = function(e) {
//     e.preventDefault();
// }

