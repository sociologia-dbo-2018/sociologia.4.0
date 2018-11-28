import {nextForm, secondPartForm, questaoOpcional} from '../modules/formReportControl.js';

const button = document.querySelector('button#enviarFormulario');
const divSelecao = document.querySelector('.selecao');
const divOpcionais = document.querySelectorAll('.opcoes');

button.addEventListener('click', nextForm);

divSelecao.addEventListener('click', secondPartForm);
