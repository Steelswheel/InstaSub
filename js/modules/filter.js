export class Filter {
    listFilter = (str) => { //Очищает строку от ненужных символов
        let data = str.split('@').filter(item => item != '').map(item => item.slice(0, -1).trim());
        return data;
    }

    dataFilter(str) { //Метод для получения имени аккаунта
        const arr = str.split('Фото профиля ').filter(item => item != '').map(item => item.split('\n', 1).join(''));
        const set = new Set(arr);
        return Array.from(set);
    }

    sortSubs(a, b) { //Функция для сортировки и сравнения массивов подписчиков
        const arr = a.filter(i => b.indexOf(i) == -1);
        arr.reverse();
        return arr;
    }
}