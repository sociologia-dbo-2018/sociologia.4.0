import {veiculos} from '../objects/veiculos.object.js';
import {wordFinder} from './wordFinder.module.js';
// import {renderNews} from './renderNews.module.js';

export const getNews = () => {
    const CORS_PROXY = 'https://cors.io/?';

    let xml;
    for (const veiculo of veiculos) {
        fetch(CORS_PROXY + veiculo.endpoint)
            .then((r) => r.text())
            .then((str) => {
                const parser = new DOMParser();
                xml = parser.parseFromString(str, 'text/xml');
                for (const itemTag of xml.querySelectorAll('item')) {
                    veiculo.itens.push(itemTag.children);
                }

                findWordKeys(veiculo);
            });
    }
};
const findWordKeys = (veiculo) => {
    // Navegando nos itens trazidos
    for (let item of veiculo.itens) {
        // Cria um vetor com todas as palavras em minusculos da descrição
        item = Array.from(item);
        let title = null;
        let link = null;
        for (const i of item) {
            if (i.tagName === 'title') title = i.textContent;
            if (i.tagName === 'link') link = i.textContent;
        }
        for (const i of item) {
            if (i.tagName === 'description') {
                const description = i.textContent.toLowerCase().split(' ');
                wordFinder(description, title, link);
            }
        }
    }
};
