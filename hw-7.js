//Task#1

let text = "js";
let textAltered = text.toUpperCase();
console.log(textAltered);

//Task#2
const searchElement = (elements, findIt) => {
    const newArray = new Array();
    elements.forEach(element => {
        if (element.toLowerCase().startsWith(findIt.toLowerCase())) {
            newArray.push(element);
        }
    });
    return newArray;
}
console.log(searchElement(['Яблоки красные',  'ЯбЛОко Грин Делишес','Томаты', 'Яблочное пюре', 'яблоко Зеленое', 'Яблочный пирог', 'груша', 'Яблоко Голден'], 'яблоко'));


//Task#3


const num = 32.58884;
    console.log(`До меньшего целого ${Math.floor(num)}`);
    console.log(`До большего целого ${Math.ceil(num)}`);
    console.log(`До ближайшего целого ${Math.round(num)}`);
           
         
//Task#4


const numbers = [52, 53, 49, 77, 21, 32];
let number = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > number) {
        number = numbers[index];
    }
    
}
console.log(`Максимальное значение равно: ${number}`);


const toFindMin = () => {
    return Math.min(52, 53, 49, 77, 21, 32);
}
console.log(`Минимальное значение равно: ${toFindMin()}`);

//Task#5

const randomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);
}
console.log(randomNumber());


//Task#6

function randomArray(n) {
    const newArray = [];
    let randomNum; 
    const newArrayLenth = n / 2;
    for (let i = 0; i < newArrayLenth; i++) {
        randomNum = Math.floor(Math.random() * n);
        newArray.push(randomNum);
        
    }
    return newArray;
}
console.log(randomArray(6));

//Task#7


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }
      console.log(getRandomInt(3, 8));


//Task#8

let todaysDate = new Date();
console.log(todaysDate);


//Task#9


let myDate = new Date();
myDate.setDate(myDate.getDate() + 73);
console.log(myDate);


//Task#10

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
let newDate = new Date();
let fullDate = "Дата: " + newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear() + " год " + " - это " + days[newDate.getDay()];
//let fullTime = "Время: " + newDate.getHours() + ":" + newDate.getMinutes(2) + ":" + newDate.getSeconds(2);
let fullTime = "Время: " + newDate.toLocaleTimeString('ru-RU');
console.log(fullDate);
console.log(fullTime);