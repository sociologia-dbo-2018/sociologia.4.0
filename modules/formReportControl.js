import {firebaseControl} from './firebaseControl.module.js';

const divMapa = document.querySelector('.mapa');
const divSelecao = document.querySelector('.selecao');
const inputs = document.querySelectorAll('.selecao input');
const divOpcional = document.querySelector('.opcional');
const divOpcionais = document.querySelector('.questoes_opcionais');
const buttonEnvia = document.querySelector('button#enviarFormulario');
const divPergunta = document.querySelector('.pergunta');
const mensagemFinal = document.querySelector('.mensagem');
const inputsOpcionais = document.querySelectorAll('.questoes_opcionais input');
let divForm = null;

export const functions = {
    object: {},
    flagForm: 0,
    firstForm: function() {
        divMapa.className = 'd-none';
        divSelecao.className = 'selecao w-100 d-flex flex-column';
        this.flagForm++;
        firebaseControl.sendMap(this.object);
        // firebaseControl.sendMap(obj);
    },
    secondForm: function() {
        for (const input of inputs) {
            if (input.checked) {
                const value = input.value;
                divForm = document.querySelector(`div.${value}.opcoes`);
                divSelecao.className = 'selecao d-none';
                divForm.className = `${value} opcoes w-100 d-flex flex-column`;
                this.object.first = value;
                this.flagForm++;
                break;
            }
        }
    },
    thirdForm: function() {
        const inputs = document.querySelectorAll(
            `div.${this.object.first}.opcoes input`);
        for (const input of inputs) {
            if (input.checked) {
                divForm.className =
                    `${this.object.first} opcoes d-none`;
                divPergunta.className =
                    'pergunta d-flex flex-column align-items-center';
                divOpcional.className =
                    'opcional w-100 d-flex justify-content-center';
                buttonEnvia.className = 'd-none';
                this.object.second = input.value;
                break;
            }
        }
    },
    lastForm: function() {
        divPergunta.className = 'd-none';
        buttonEnvia.className = 'btn btn-secondary';
        divOpcionais.className =
            'd-flex questoes_opcionais w-100 list-group flex-columun';
        this.flagForm++;
    },
    optionalForm: function() {
        this.object.opcionais = {};
        for (const input of inputsOpcionais) {
            if (input.checked) {
                if (input.name === 'genero') {
                    this.object.opcionais.genero = input.value;
                } else if (input.name === 'etnia') {
                    this.object.opcionais.etnia = input.value;
                } else if (input.name === 'idade') {
                    this.object.opcionais.idade = input.value;
                } else if (input.name === 'classe_social') {
                    this.object.opcionais.classe_social = input.value;
                }
            }
        }
        this.sendToFirebase();
    },
    sendToFirebase: function() {
        divOpcional.className = 'd-none';
        buttonEnvia.parentElement.className = 'd-none';
        mensagemFinal.className =
            'mensagem d-flex align-items-center flex-column';
        mensagemFinal.children[1].className = 'd-flex';
        firebaseControl.sendForm(this.object);
    },
    returnForm: function() {
        if (this.flagForm === 1) {
            divMapa.className = 'd-flex flex-column align-items-center';
            divSelecao.className = 'selecao d-none';
            this.flagForm--;
        } else if (this.flagForm === 2) {
            divForm.className = `${this.object.first} opcoes d-none`;
            divSelecao.className = 'selecao w-100 d-flex flex-column';
            this.flagForm--;
        } else if (this.flagForm === 3) {
            divForm.className =
            `${this.object.first} opcoes w-100 d-flex flex-column`;
            divOpcional.className = 'opcional d-none';
            divPergunta.className = 'd-none';
            buttonEnvia.className = 'btn btn-secondary';
            this.flagForm--;
        }
    }
};
