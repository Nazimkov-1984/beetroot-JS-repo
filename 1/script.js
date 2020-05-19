"use strict";
 let name;

   name = prompt ('Введите Ваше имя!','');
   alert(`Привет ${name} !`); 

   
        
       
    /*
let year, yearUser, result; 
    year = 2020;
    yearUser = +prompt('Введите Ваш год рождения','');
    result = year - yearUser;
    alert (`Ваш возраст -  ${result} !`);   */
         
    
    /*    
let l, perimetr;

l = +prompt('Введите сторону квадрата','');
    perimetr = l*4;
    alert(`Периметр квадрата равен: ${perimetr} `);
    */
/*
let r, p;
r = +prompt ('Введите радиус окружности', 'R');
p = 2*Math.PI*Math.pow(r,2);
alert(`Площадь окружности ${p}`); */
/*
let distanse, speed, time;
distanse = +prompt('Введите расстояние в км:','');
time = +prompt('Введите время за которое хотите добратся до конечного пункта в часах');
speed = Math.round(distanse/time);
alert(`Вам нужно двигатся со скростью примерно-  ${speed} км/ч`); */
/*
let dollar, euro;
const course = 1.09;
dollar = +prompt('Введите сумму в долларах USA', '');
euro = dollar/course;
alert(`Ваша сумма в евро ${euro} `);*/
/*
let sizeUsb, quantityFiles, gbToMb;
const sizeFile = 820;

sizeUsb = +prompt('Введите размер флешки в  гигабайтах (Гб):', '');
gbToMb = sizeUsb*1024;
quantityFiles = Math.trunc(gbToMb/sizeFile);
alert(`Количество файлов, которое поместится на флешку - ${quantityFiles} шт.`); */
/*
let costs, priceOfChoklet, quantityChoklet, balance;

costs = +prompt('Введите сумму денег в кошельке','');
priceOfChoklet = +prompt('Введите цену одной шоколадки','');
quantityChoklet = Math.trunc(costs/priceOfChoklet);
balance = costs%priceOfChoklet;
alert(`Вы можете купить ${quantityChoklet} шт. и у вас останеться ${balance} грн!`); */

/*
let defaultDigit, firstDigit, secondDigit, thirdDigit;

defaultDigit = +prompt('Введите трехзначное число','');
firstDigit = Math.trunc(defaultDigit/100);
secondDigit = Math.trunc((defaultDigit%100)/10);
thirdDigit = Math.trunc (defaultDigit%10);

alert(` Исходное число-${defaultDigit}. Преобразованное число - ${thirdDigit}${secondDigit}${firstDigit}`); 

let balance, result;
const persent = 5, period = 2;

balance = +prompt('Введите сумму вклада', '');
result = (balance*(persent/100))/(12/period);
alert(`Сумма % за два месяца по вкладу - ${result}.`); */