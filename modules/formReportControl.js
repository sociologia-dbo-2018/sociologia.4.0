import {firebaseControl} from './firebaseControl.module.js';

const divMapa = document.querySelector('.mapa');
const divSelecao = document.querySelector('.selecao');
const inputs = document.querySelectorAll('.selecao input');
const divOpcional = document.querySelector('.opcional');
const divOpcionais = document.querySelector('.questoes_opcionais');
const buttonEnvia = document.querySelector('button#enviarFormulario');

let divForm = null;

export const functions = {
    object: {},
    flagForm: 0,
    firstForm: function() {
        // e.preventDefault();
        divMapa.className = 'd-none';
        divSelecao.style.display = 'flex';
        this.flagForm++;
        // firebaseControl.sendMap(obj);
    },
    secondForm: function() {
        // e.preventDefault();
        for (const input of inputs) {
            if (input.checked) {
                const value = input.value;
                divForm = document.querySelector(`div.${value}.opcoes`);
                divSelecao.style.display = 'none';
                divForm.style.display = 'flex';
                this.object.primary = value;
                this.flagForm++;
                break;
            }
        }
    },
    thirdForm: function() {
        const inputs = document.querySelectorAll(`div.${this.object.primary}.opcoes input`);
        for (const input of inputs) {
            if (input.checked) {
                input.parentElement.parentElement.style.display = 'none';
                divOpcional.className = '.opcional.w-100.d-flex.flex-column';
                buttonEnvia.className = 'd-none';
                this.object.secondary = input.value;
                firebaseControl.sendForm(this.object);
                this.flagForm++;
                break;
            }
        }
    },
    lastForm: function() {
        buttonEnvia.className = '.d-flex.align-self-end.btn.btn-secondary.mt-5';
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
