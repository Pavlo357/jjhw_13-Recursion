// Task #1

// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
// getFactorial(3) в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1


function getFactorial(n) {

    return (n != 1) ? n * getFactorial(n - 1) : 1;
}
console.log(getFactorial(3));