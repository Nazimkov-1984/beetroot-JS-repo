"use strict";

let age;

age = +prompt('Введите ваш возраст', '');
if (age > 0 && age <=12) {
    alert('Вы ребенок!');
}
if (age>12 && age <=18) {
    alert('Вы подросток!');
}
if (age > 18 && age <=60) {
    alert('Вы взрослый!');
}
if (age > 60)  {
    alert('Вы пенсионер!');
}

/*
let symbol;

symbol = +prompt('Введите число от 0 до 9', '');
switch (symbol) {
    case 0: alert(')');
    break;
    case 1: alert('!');
    break;
    case 2: alert('@');
    break;
    case 3: alert('#');
    break;
    case 4: alert('$');
    break;
    case 5: alert('%');
    break;
    case 6: alert('^');
    break;
    case 7: alert('&');
    break;
    case 8: alert('*');
    break;
    case 9: alert('(');
    break;
}

*/
/*
let defaultDigit, firstDigit, secondDigit, thirdDigit;

defaultDigit = +prompt('Введите трехзначное число','');
firstDigit = Math.trunc(defaultDigit/100);
secondDigit = Math.trunc((defaultDigit%100)/10);
thirdDigit = Math.trunc (defaultDigit%10);

if (firstDigit===secondDigit || firstDigit===thirdDigit || secondDigit === thirdDigit) {
    alert('В числе есть одинаковые цифры');
} else {
    alert('В числе нет одинаковых цифр');
} */
/*
let year;

year = +prompt('Введите год','');

if ((year%4)>0) {
    alert('Этот год обычный');
} else {
    if ((year%100) === 0) {
        if ((year%400) === 0) {
            alert('Этот год высокосный');
        } else {alert('Этот год обычный');}
    } else {alert('Этот год высокосный'); }

} */
/*
let digit, digitLen;

digit = prompt('Введите 5-ти значное число','');
digitLen = digit.length;
for ( let i=0; i<digitLen; i++) {
    if (digit[i] === digit[digitLen - 1 - i]) {alert('Это число палиндром'); break} else { alert('Это число не палиндром'); break}
} */
/*
let i, balance, result; 
balance = prompt('Введите сумму USD','');
i = +prompt('Нажмите 1 если хотите выбрать EUR, нажмите 2 если хотите выбрать UAN, нажмите 3 если хотите выбрать AZN','');

switch (i) {
    case 1: result = balance/1.09;
    alert(`Вы получите ${result} EUR `);
    break;
    case 2: result = balance*25;
    alert(`Вы получите ${result} UAN `);
    break;
    case 3: result = balance*0.59;
    alert(`Вы получите ${result} UZN `);
    break;
} */
/*
let balance, result;

balance = +prompt('Введите сумму покупки','');

if (balance<=200) {
    alert('Извините, скидки нет!');
} else 
    if (balance>200 && balance<300) {
        result = balance - (balance*(3/100));
        alert(`Ваша покупка со скидкой - ${result} грн `);
    } else 
        if (balance=>300 && balance<500) {
            result = balance - (balance*(5/100));
        alert(`Ваша покупка со скидкой - ${result} грн `);
        } else if (balance=>500) {
            result = balance - (balance*(7/100));
            alert(`Ваша покупка со скидкой - ${result} грн `);
        } */
/*
let pSquare, lCircle, l, r;
lCircle = +prompt('Введите длину окружности','');
pSquare = +prompt('Введите периметр квадрата','');
l = pSquare/4;
r = lCircle/6.28;

if (r>l) 
{
    alert('Окружность не влезет в квадрат');
} else 
    if (r=l || r<l ) {
        alert('Окружность поместиться в квадрат');
    } */
/*
let a,b,c, result;
result = 0;
alert(' Бейсбольный мяч и бита вместе стоят 1 доллар и 10 центов. При этом бита стоит на 1 доллар дороже мяча. Сколько стоит мяч?');
a = +prompt('Ответ 10 - нажмите 1; Ответ 20 - нажмите 2; Ответ 5 - нажмите 3; Для продолжения нажмите "ОК"','');
alert('В озере есть участок, заросший кувшинками. Каждый день этот участок увеличивается в размере в 2 раза. Известно, что кувшинки покроют всю поверхность озера за 48 дней.За сколько дней кувшинки покроют ровно половину поверхности озера?');
b = +prompt('Ответ 24 - нажмите 1; Ответ 47 - нажмите2; Ответ 12 - нажмите 3; Для продолжения нажмите ОК','');
alert ('5 станков за 5 минут делают 5 деталей. Сколько времени понадобится, чтобы 100 станков сделали 100 деталей?');
c = +prompt('Ответ 5 - нажмите1; Ответ 10 - нажмите2; Ответ 100 - нажмите 3','');

if (a===3) {
    result = result+2;
} 
if (b===2) {
    result = result+2;
}
if (c===1) {
    result = result+2;
}
alert (`Результат - ${result} баллов`);
*/
/*
let d,m,y,year;

d = +prompt('Введите день','');
m = +prompt('Введите месяц','');
y = +prompt('Введите год','');
year = true;

if ((y%4)>0) {
    year = true;
} else {
    if ((y%100) === 0) {
        if ((y%400) === 0) {
            year = false;
        } else {year = true;}
    } else {year = false; }

}
if (d===30 && (m===4 || m===9 || m===11)) {
    d = 1;
    m = m+1;
} else d = d+1; 

if ( m==2 && d===28 && year===false) {
    d = 1;
    m = m+1;
} 
if ( m==2 && d===29 && year===true) {
    d = 1;
    m = m+1;
} 

alert(`Полученная дата - ${d} ${m} ${y}`); */