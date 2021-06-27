// Task #2

// Реализовать рекурсивную функцию которая находит возводит число в степень.
// Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию pow(num, degree)


let num = +prompt('enter your number');
let degree = +prompt('enter your degree');

function pow(num, degree) {
    if (degree == 1) {
        return num;
    } else {
        return Math.pow(num, degree);
    }
}

console.log(pow(num, degree));
alert(pow(num, degree));