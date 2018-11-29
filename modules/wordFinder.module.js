import {keyWords} from '../objects/keyWords.object.js';
import {renderNews} from './renderNews.module.js';

export const wordFinder = (description, title, link) => {
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

    for (const word of description) {
        if (keyWords.includes(word)) {
            renderNews(title, link);
        }
    }
    return false;
};
