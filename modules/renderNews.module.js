export const renderNews = (title, link) => {
    const divNew = document.querySelector('.news');
    // titulo da noticia
    const a = document.createElement('a');
    // Incluindo link
    a.href = link;
    // Incluindo titulo
    a.textContent = title;

    const li = document.createElement('li');
    li.className = 'list-group-item';

    li.append(a);
    divNew.appendChild(li);
    // console.log(object);
};
