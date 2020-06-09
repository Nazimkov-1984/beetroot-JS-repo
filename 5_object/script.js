"use strict";
/*
const car = {
    make: "BMW",
    model: "E36",
    year: "2005",
    speed: "80"  
};

car.showCarDate = function () {
    console.log(car);
}

car.calcTimeTravel = function (distance) {
    const time;
time = distance / +car.speed;
if (time<4) { 
    return time;
} 
if (time=>4 && time<8)  {
    return time = time+1;
}
if (time>8) {
    return time = time + (Math.floor(time/4));
}
};

console.log(car.calcTimeTravel(720));
*/


let firstDrobe = {
    chislitel: 6,
    znamenatel: 24,
};

let secondDrobe = {
    chislitel: 1,
    znamenatel: 6,
};

function DrobePlus (firstDrobe, secondDrobe) { //ФУКЦИЯ СЛОЖЕНИЯ ДВУХ ДРОБЕЙ 
    let result1, result2, A = [], fDop = 0, secDop = 0, nok = 0;
    A[0] = +firstDrobe.znamenatel;
    A[1] = +secondDrobe.znamenatel;
    if (firstDrobe.znamenatel === secondDrobe.znamenatel) { //вычисляем если знаменатели равны
         result1 =  (+firstDrobe.chislitel)+(+secondDrobe.chislitel);
         result2 = +firstDrobe.znamenatel;
         return {result1, result2}; 
    };// если знаменатели не равны 
        function NOK(A)                             // функция для вычисления наименьшее общее кратное (НОК)
        {   
    let  n = A.length, a = A[0];
    for (let i = 1; i < n; i++)
     { let b = Math.abs(A[ i ]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; } 
       a = Math.abs(c*A[ i ])/(a+b);
     }
    return a;} // возвращаем НОК  
  NOK(A);
fDop = a/firstDrobe.znamenatel; // допольнительный множитель первой дроби
secDop = a/secondDrobe.znamenatel;// дополнительный множитель второй дроби
result1 = (firstDrobe.chislitel*fDop)+(secondDrobe.chislitel*secDop);
result2 = nok;
return {result1, result2}
    };      
    console.log (DrobePlus(firstDrobe,secondDrobe));
    /*
function DrobeMinus (firstDrobe, secondDrobe) { // ФУНКЦИЯ ВЫЧИТАНИЯ ДВУХ ДРОБЕЙ 
    let result1, result2, A = [], fDop = 0, secDop = 0, nok = 0;
    A[0] = +firstDrobe.znamenatel;
    A[1] = +secondDrobe.znamenatel;
    if (firstDrobe.znamenatel === secondDrobe.znamenatel) { //вычисляем если знаменатели равны
         result1 =  (+firstDrobe.chislitel)+(+secondDrobe.chislitel);
         result2 = +firstDrobe.znamenatel;
         return {result1, result2}; 
    };// если знаменатели не равны 
        function NOK(A)                             // функция для вычисления наименьшее общее кратное (НОК)
        {   
    let  n = A.length, a = A[0];
    for (let i = 1; i < n; i++)
     { let b = Math.abs(A[ i ]), c = a;
       while (a && b){ a > b ? a %= b : b %= a; } 
       a = Math.abs(c*A[ i ])/(a+b);
     }
    return a;} // возвращаем НОК  
  nok = (NOK(A)) ;
fDop = nok/firstDrobe.znamenatel; // допольнительный множитель первой дроби
secDop = nok/secondDrobe.znamenatel;// дополнительный множитель второй дроби
result1 = (firstDrobe.chislitel*fDop)-(secondDrobe.chislitel*secDop);
result2 = nok;
return {result1, result2}
    };      
    /*
    function DrobeMultiply (firstDrobe, secondDrobe) { //ФУКЦИЯ УМНОЖЕНИЯ ДВУХ ДРОБЕЙ 
        let result1, result2;
             result1 =  (+firstDrobe.chislitel)*(+secondDrobe.chislitel);
             result2 = (+firstDrobe.znamenatel)* (+secondDrobe.znamenatel);
             return {result1, result2}; 
        };
        console.log (DrobeMultiply(firstDrobe, secondDrobe)); */ 

        /*
        function DrobeSplit (firstDrobe, secondDrobe) { //ФУКЦИЯ ДЕЛЕНИЯ ДВУХ ДРОБЕЙ 
            let result1, result2;
                 result1 =  (+firstDrobe.chislitel)*(+secondDrobe.znamenatel);
                 result2 = (+firstDrobe.znamenatel)* (+secondDrobe.chislitel);
                 return {result1, result2}; 
            };
            console.log (DrobeSplit(firstDrobe, secondDrobe));  */
/*
            function DrobeCut (firstDrobe) { //ФУКЦИЯ СОКРАЩЕНИЯ ДРОБИ 
                var gcd = function(a, b) {
                    if ( ! b) {
                        return a;
                    }
                    return gcd(b, a % b);
                };
                let result1, result2, nod;
                nod = gcd(firstDrobe.chislitel, firstDrobe.znamenatel);
                     result1 =  (+firstDrobe.chislitel)/(nod);
                     result2 = (+firstDrobe.znamenatel)/(nod);
                     return {result1, result2}; 
                };
                console.log (DrobeCut(firstDrobe));  */
                /*
const time = {
    hour: 1,
    min : 20,
    sec : 30,
}

function showtime(time) {
    console.log (`Current time - ${time.hour}:${time.min}:${time.sec}`);
};
showtime(time);

function changeTimeOnSec (time, sec) {
time.sec = time.sec + sec;
if ((time.sec) >= 60) {
time.sec = time.sec-60;
time.min = ++time.min;
}
if (time.min >= 60) {
    time.hour = ++time.hour;
    time.min = time.min - 60;
}
return time;
};

console.log (changeTimeOnSec(time, 35));

function changeTimeOnMin (time, min) {
    time.min = time.min + min;
    if ((time.min) >= 60) {
    time.min = time.min-60;
    time.hour = ++time.hour;
    }
    return time;
    };
    console.log (changeTimeOnMin (time, 40));
function changeTimeOnHour (time, hour) {
    time.hour = time.hour + hour;
    return time; 
    };
    console.log (changeTimeOnHour (time, 2)); */
