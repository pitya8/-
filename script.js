// JavaScript Document
'use strict';
//4. Підключення JS та змінні


var leftBorderWidth = 1;
let second =2;
const pi = 3.14;   
console.log (second); 

var number = 5;
var string = "Hello";
var sym = Symbol ();
var boolean = true;
null;
undefined;
var obj = {};

//5. Класифікація типів даних

console.log(4/0);
console.log ('string'*9);
let something;
console.log (something);
let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png' , 'orange.jpg' , 'aplle.bmp'];
console.log(arr[2]); 

//6. Класифікація типів даних

//alert ("Hello World!");

//let answer = confirm ("Are you here?");

//console.log(answer);

// let answer = +prompt ("Есть ли Вам 18?", "да");

// console.log(typeof(answer));

// console.log(4 + +" - object");

//7. Оператори

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);
console.log(5%2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;

console.log (isChecked || !isClose);





/*
/*if (1) {
    console.log("Верно!")
} else {
    console.log ("Неверно")
};



if (num < 49) {
    console.log ("Неверно")
} else if (num > 100) {
    console.log ("многовато будет")
} else {
    console.log ("Верно!")
};

(num == 50) ? console.log ("Верно!") : console.log ("Неверно");*/



/*switch (true) {
    case num < 49:
        console.log ('Неверно');
        break;
    case num > 100:
        console.log ('Много');
        break;
    case num > 80:
        console.log ('Все еще много');
        break;
    case num == 50:
        console.log ('Верно!');
        break;
    default:
        console.log ('Что - то пошло не так');
        break;
};

let num = 50;
/*while (num < 55) {
    console.log(num);
    num++;
}*/

/*do {
    console.log(num);
    num++;
}
while (num < 55)

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log (i)
}

let x = 5; 
console.log(x++);

alert( x++ );*/