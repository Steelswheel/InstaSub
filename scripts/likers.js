const likers = document.body.querySelector('.likers_list'); //Список лайкнувших пост
const subscribers = document.body.querySelector('.likers_subscribers-list'); //Список лайкнувших пост
const total = document.body.querySelector('.likers_total'); //Итоговый результат
const submit = document.body.querySelector('.likers_submit'); //Кнопка отправки данных
const clear = document.body.querySelector('.likers_clear'); //Кнопка очистки формы

const listFilter = (str) => {
    let data = str.split('@').filter(item => item != '').map(item => item.slice(0, -1).trim());
    return data;
};

function dataFilter(str) { //Функция для получения имени аккаунта
    const arr = str.split('Фото профиля ').filter(item => item != '').map(item => item.split('\n', 1).join(''));
    const set = new Set(arr);
    return Array.from(set);
};

function sortSubs(a, b) {
    const arr = a.filter(i => b.indexOf(i) == -1);
    arr.reverse();
    return arr;
}

submit.addEventListener('click', () => {
    const likersList = listFilter(likers.value); //Коллекция лайкнувших
    const subList = dataFilter(subscribers.value); //Коллекция подписчиков
    const sorted = sortSubs(likersList, subList);
    const span = document.createElement('span');
    span.innerHTML = `Среди лайкнувших ${sorted.length} человек не подписано:` + "<br>";
    total.appendChild(span);
    for (let i = 0; i < sorted.length; i++) {
        let a = document.createElement('a');
        a.setAttribute('href', `https://instagram.com/${sorted[i]}`);
        a.innerHTML = '@' + `${sorted[i]}` + "<br>";
        total.appendChild(a);
    };
});

clear.addEventListener('click', () => {
    total.innerHTML = '';
});