//Task#1

const myArray = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);

    if (myArray[index] === 10) {
        break;
    }
}

//Task#2

const array = new Array(1, 5, 4, 10, 0, 3);
console.log(array);
let numberValue = array.indexOf(4);
console.log(`Индекс значения "четыре" в массиве: ${numberValue}`);

//Task#3

const newArray = [1, 3, 5, 10, 20];
console.log(newArray.join(' '));

//Task#4


let arr = [];

for (let index = 0; index < 3; index++) {
    let insertArr = [];

    for (let i = 0; i < 3; i++) {
        insertArr.push(1);
    }

    arr.push(insertArr);
}

console.log(arr);


//Task#5


const anotherArray = [1, 1, 1];
anotherArray.push(2, 2, 2);
console.log(anotherArray);


//Task#6

const toSortArray = [9, 8, 7, 'a', 6, 5];
toSortArray.sort();
let sortedArray = toSortArray.sort((a, b) => b - a);
let lastElement = toSortArray.pop();
console.log(sortedArray);


//Task#7


const numberArray = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt("Введите число!"));
if (numberArray.includes(userAnswer)) {
    console.log("Угадал");
} else {
    console.log("Не угадал");
}

//<?Variant?>
// if (userAnswer >= 5 && userAnswer <= 9) {
//     console.log("Угадал");
// } else {
//     console.log("Не угадал");
// }


//Task#8


//Task#9


const numberArr = [[1, 2, 3], [4, 5, 6]];
const simpleArr = numberArr.flat();
console.log(simpleArr);

//Task#10


const randomArray = [];
let randomNum;
for (let k = 0; k < 10; k++) {
    randomNum = Math.floor(Math.random() * 10 + 1);
    randomArray.push(randomNum);

}
console.log(randomArray);

for (let j = 0; j < randomArray.length - 1; j++) {
    console.log(randomArray[j] + randomArray[j + 1]);
}

//Task#11

const squredNum = () => {
    const newArr = new Array();

    for (let h = 0; h < 5; h++) {
        let newNum = Math.floor(Math.random() * 10 + 1);
        newArr.push(newNum);
    }

    console.log(newArr);

    return newArr.map(item => item ** 2);
}
console.log(squredNum());

//Task#12



const getTextLenth = (textArray) => textArray.map(item => item.length)

const result = getTextLenth(["Ryan", "Marilyn", "Andrew", "Anastasia"]);
console.log(result);


//Task#13

const getNumber = (numberArray) => {
    return numberArray.filter(number => number < 0);
}
console.log(getNumber([5, 4, -8, 5, 11, -56, 4, -1, 6, -22, 9]));



//Task#14


const randomArr = [];
const newNumArr = [];
for (let m = 0; m < 10; m++) {
    randomArr.push(Math.floor(Math.random() * 10));
    if (randomArr[m] % 2 === 0 /*&& randomArr[m] !== 0*/) {
        newNumArr.push(randomArr[m]);
    }
}
console.log(randomArr);
console.log(newNumArr);


// const randomArr = [];

// const randomNumber = () => Math.floor(Math.random() * 10);

// for (let m = 0; m < 10; m++) {
//        randomArr.push(randomNumber());

// }    
// const result = randomArr.filter(item => item % 2 === 0)
// console.log(randomArr);			     
// console.log(result);


//Task#15



function myRandomNum() {
    return Math.floor(Math.random() * 10 + 1);

}

const newRandomArr = [];

for (let q = 0; q < 6; q++) {
    newRandomArr.push(myRandomNum());
}

console.log(newRandomArr);
const sum = newRandomArr.reduce((addition, number) => addition + number, 0);
console.log(`Средеарифметическое равно: ${Math.floor(sum / newRandomArr.length)}`);

