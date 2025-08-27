// Task#1
function min(a, b) {
    return a < b ? a : b;
}

// Пример использования
console.log(min(8, 4)); // 4
console.log(min(6, 6)); // 6

// Task#2

function checkEvenOrOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

// Пример использования
console.log(checkEvenOrOdd(4)); // Число четное
console.log(checkEvenOrOdd(5)); // Число нечетное

//Task#3

function printSquare(n) {
    console.log(n * n);
}

function returnSquare(n) {
    return n * n;
}

// Пример использования
printSquare(3); // 9
console.log(returnSquare(4)); // 16

//Task#4

function askAge() {
    const age = parseInt(prompt("Сколько вам лет?"), 10);

    if (isNaN(age) || age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}

// askAge(); // Раскомментируйте для тестирования

//Task#5

function multiplyIfValid(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
    return a * b;
}

// Пример использования
console.log(multiplyIfValid(5, 10)); // 50
console.log(multiplyIfValid(5, 'test')); // Одно или оба значения не являются числом

//Task#6

function checkNumberAndCube() {
    const input = prompt("Введите число:");
    const n = parseFloat(input);

    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    }
    const cube = n ** 3;
    return `${n} в кубе равняется ${cube}`;
}

// Пример использования
console.log(checkNumberAndCube()); // Запустите для тестирования

//Task#7

const circle1 = {
    radius: 5,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

const circle2 = {
    radius: 10,
    getArea: function () {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter: function () {
        return 2 * Math.PI * this.radius;
    }
};

// Пример использования
console.log(circle1.getArea()); // Площадь круга с радиусом 5
console.log(circle1.getPerimeter()); // Периметр круга с радиусом 5

console.log(circle2.getArea()); // Площадь круга с радиусом 10
console.log(circle2.getPerimeter()); // Периметр круга с радиусом 10