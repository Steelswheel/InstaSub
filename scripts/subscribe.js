const originInfoFrom = document.body.querySelector('.subscribes_my-list');//Список моих подписок со страницы
const originInfoTo = document.body.querySelector('.subscribes_subscribers-list');//Список подписчиков со страницы
const totalInfo = document.body.querySelector('.subscribes_total');//Итоговый результат
const submitButton = document.body.querySelector('.subscribes_submit');//Кнопка отправки данных
const clearButton = document.body.querySelector('.subscribes_clear');//Кнопка очистки формы

function dataFilter(str) {//Функция для получения имени аккаунта
  const arr = str.split('Фото профиля ').filter(item => item != '').map(item => item.split('\n', 1).join(''));
  const set = new Set(arr);
  return Array.from(set);
};

function sortSubs(a, b) {
  const arr = a.filter(i => b.indexOf(i) == -1);
  arr.reverse();
  return arr;
}

submitButton.addEventListener('click', () => {
  const mySubscriptions = dataFilter(originInfoFrom.value);//Коллекция моих подписок (которые сделаны мной)
  const mySubscribers = dataFilter(originInfoTo.value);//Коллекция моих подписчиков
  const sorted = sortSubs(mySubscriptions, mySubscribers);
  let br = document.createElement('br');
  const span = document.createElement('span');
  span.innerHTML = `Всего не подписано: ${sorted.length} человек`;
  totalInfo.appendChild(span);
  totalInfo.appendChild(br);
  for (let i = 0; i < sorted.length; i++) {
    let br = document.createElement('br');
    let a = document.createElement('a');
    a.setAttribute('href', `https://instagram.com/${sorted[i]}`);
    a.innerHTML = `${sorted[i]}`;
    totalInfo.appendChild(a);
    totalInfo.appendChild(br);
  };
});

clearButton.addEventListener('click', () => {
  totalInfo.innerHTML = '';
});
