export class Manager {
    constructor(obj1, obj2, Filter) {
        let {likers, subscribers, total, submit, clear} = obj1;
        let {originInfoFrom, originInfoTo, totalInfo, submitButton, clearButton} = obj2;
        this.likers = likers;
        this.subscribers = subscribers;
        this.total = total;
        this.submit = submit;
        this.clear = clear;
        this.originInfoFrom = originInfoFrom;
        this.originInfoTo = originInfoTo;
        this.totalInfo = totalInfo;
        this.submitButton = submitButton;
        this.clearButton = clearButton;
        this.filter = new Filter();

        this.submit.addEventListener('click', () => {
            this.checkLikers();
        });
        this.clear.addEventListener('click', () => {
            this.clearAll(this.total, this.likers, this.subscribers);
        });
        this.clearButton.addEventListener('click', () => {
            this.clearAll(this.originInfoFrom, this.originInfoTo, this.totalInfo);
        });
        this.submitButton.addEventListener('click', () => {
            this.checkSubs();
        });
    }

    checkLikers() {
        const likersList = this.filter.listFilter(this.likers.value); //Коллекция лайкнувших
        const subList = this.filter.dataFilter(this.subscribers.value); //Коллекция подписчиков
        const sorted = this.filter.sortSubs(likersList, subList);
        const span = document.createElement('span');

        span.innerHTML = `Среди лайкнувших ${sorted.length} человек не подписано:` + "<br>";
        this.total.appendChild(span);

        for (let i = 0; i < sorted.length; i++) {
            let a = document.createElement('a');
            a.setAttribute('href', `https://instagram.com/${sorted[i]}`);
            a.innerHTML = '@' + `${sorted[i]}` + "<br>";
            this.total.appendChild(a);
        };
    }

    checkSubs() {
        const mySubscriptions = this.filter.dataFilter(this.originInfoFrom.value); //Коллекция моих подписок (которые сделаны мной)
        const mySubscribers = this.filter.dataFilter(this.originInfoTo.value); //Коллекция моих подписчиков
        const sorted = this.filter.sortSubs(mySubscriptions, mySubscribers);

        let br = document.createElement('br');
        const span = document.createElement('span');
        span.innerHTML = `Всего не подписано: ${sorted.length} человек`;
        this.totalInfo.appendChild(span);
        this.totalInfo.appendChild(br);
        for (let i = 0; i < sorted.length; i++) {
            let br = document.createElement('br');
            let a = document.createElement('a');
            a.setAttribute('href', `https://instagram.com/${sorted[i]}`);
            a.innerHTML = `${sorted[i]}`;
            this.totalInfo.appendChild(a);
            this.totalInfo.appendChild(br);
        }
    }

    clearAll(...args) {
        args.forEach(item => {
            item.innerHTML = "";
            item.value = "";
        });
    }
}