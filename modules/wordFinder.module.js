import {key_words} from '../objects/keyWords.object.js';

export const wordFinder = (description) => {
    // Python ;)
    const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    // Removento qualquer pontuação de inicio ou fim
    description = description.map(function(element) {
        if (punctuation.includes(element[0])) {
            return element.replace(element, element.substring(1));
        } else if (punctuation.includes(element[element.length - 1])) {
            return element.replace(element,
                element.substring(0, element.length - 1));
        } else {
            return element;
        }
    });

    for (const key_word of key_words) {
        for (const word of description) {
            if (key_word === word) {
                console.log('word');
                return true;
            }
        }
    }
    return false;
};
