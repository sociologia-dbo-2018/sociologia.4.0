import {functions} from '../modules/formReportControl.js';

const buttonEnviar = document.querySelector('button#enviarFormulario');
const buttonVoltar = document.querySelector('button#voltarFormulario');
const opitionalSim = document.querySelector('button#opitional_button_yes');
const opitionalNo = document.querySelector('button#opitional_button_no');

buttonEnviar.addEventListener('click', function(e) {
    e.preventDefault();
    if (functions.flagForm === 0) {
        functions.firstForm();
    } else if (functions.flagForm === 1) {
        functions.secondForm();
    } else if (functions.flagForm === 2) {
        functions.thirdForm();
    } else if (functions.flagForm === 3) {
        functions.optionalForm();
    }
});

opitionalSim.addEventListener('click', function(e) {
    e.preventDefault();
    functions.lastForm();
});

opitionalNo.addEventListener('click', function(e) {
    e.preventDefault();
    functions.sendToFirebase();
});

buttonVoltar.addEventListener('click', function(e) {
    e.preventDefault();
    functions.returnForm();
});
