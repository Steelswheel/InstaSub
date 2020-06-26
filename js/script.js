import {Manager} from './modules/manager.js';
import {Filter} from './modules/filter.js';

const likers = {
    likers: document.body.querySelector('.likers_list'), //Список лайкнувших пост
    subscribers: document.body.querySelector('.likers_subscribers-list'), //Список лайкнувших пост
    total: document.body.querySelector('.likers_total'), //Итоговый результат
    submit: document.body.querySelector('.likers_submit'), //Кнопка отправки данных
    clear: document.body.querySelector('.likers_clear') //Кнопка очистки формы
};

const subs = {
    originInfoFrom: document.body.querySelector('.subscribes_my-list'), //Список моих подписок со страницы
    originInfoTo: document.body.querySelector('.subscribes_subscribers-list'), //Список подписчиков со страницы
    totalInfo: document.body.querySelector('.subscribes_total'), //Итоговый результат
    submitButton: document.body.querySelector('.subscribes_submit'), //Кнопка отправки данных
    clearButton: document.body.querySelector('.subscribes_clear') //Кнопка очистки формы
}

const manager = new Manager(likers, subs, Filter);
