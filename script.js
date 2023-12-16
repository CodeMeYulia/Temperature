const main = document.querySelector('.main_container');
const list = document.querySelector('.main_text');
const cities = ['Порто', 'Амстердам', 'Окланд', 'Тбилиси', 'Братислава', 'Гродно', 'Котор'];
let temperatures = [];

for (let city of cities){
    let tempNow = prompt(`укажите температуру в ${city}`);
    temperatures.push(tempNow);

    function addCity(){
        const pointCity = document.createElement('div');
        pointCity.innerHTML = `В городе ${city} сегодня ${tempNow}°C.`;
        list.append(pointCity);
    }

    addCity();
}

//находим макс темп
function letMax(){
    const maxTemp = temperatures.sort()[temperatures.sort().length - 1];
    const maxTempblock = document.createElement('div');
    maxTempblock.classList.add('special');
    maxTempblock.innerHTML = `Самая высокая температура + ${maxTemp}°C`;
    main.append(maxTempblock);
}

//находим мин темп
function letMin(){
    const minTemp = temperatures.sort()[0];  
    const minTempblock = document.createElement('div');
    minTempblock.classList.add('special');
    minTempblock.innerHTML = `Самая низкая температура ${minTemp}°C`;
    main.append(minTempblock);
}

//публикуем запись о крайних температурах
letMax();
letMin();



