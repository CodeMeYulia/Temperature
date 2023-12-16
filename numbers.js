let numbers = [];


    addNumbers();
    console.log(numbers);
    delMinus();
    console.log(numbers);
    square();
    console.log(numbers);
    sort();


function addNumbers() {
    for(let i = -10; i <= 10; i++){
        numbers.push(i);
    }
}

function delMinus() {
    item = numbers[0];
    while (item < 0){
        numbers.shift(item);
        item++;
}
}

function square() {
    numbers = numbers.map((num) => {
        return num*num;
    })
}

function sort() {
    numbers = numbers.sort((a, b) => {
        return b - a;
    })
}

console.log(numbers);