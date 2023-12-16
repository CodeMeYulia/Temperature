let numbers = [];

    addNumbers();
    delMinus();
    square();
    sort();


function addNumbers() {
    for(let i = -10; i <= 10; i++){
        numbers.push(i);
    }
}

function delMinus() {
    numbers = numbers.filter(function(num) {
        return num > 0;
    });
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