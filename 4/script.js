"use strict"
/*
let x,y;
x = +prompt('Введите первое число');
y = +prompt('Введите второе число');
function numChange (x,y)  {
    if (x>y){
        return -1;
    } else {
        if (x<y) {
            return-1;
        } else {
            return 0;}
        }
}

alert(numChange(x,y));

*/

/*
let n, result;
n = +prompt('Введите число для которого вычисляют факториал','');
function getFactorial (n) {
    return (n != 1) ? n * getFactorial(n - 1) : 1;
}
 result = getFactorial(n);

alert(`Факториал числа  ${n} равен ${result}`); */



/*
let x,y,z, resultNum;

x = +prompt('Введите первое число');
y = +prompt('Введите второе число');
z = +prompt('Введите второе число');

function getBigNum (x,y,z) {
    x = x*100;
    y = y*10;
    resultNum = x+y+z;
    return resultNum;
}
alert (getBigNum(x,y,z)); */
/*
let h,l, squ;

l = +prompt('Введите длину прямоугольника (можно не вводить - получится площадь квадрата)');
h = +prompt('Введите ширину прямоугольника'); 

function getSqu (h,l=h) {
    return  h*l;
} 
alert (getSqu(h));
 */
/*
let n, z,result,i;
n = +prompt('Введите число для проверки');
z= 0;
function awesomeNumber (n) {
    for (i=1; i<n; i++) {
        if (n%i===0) {
            z = z+i;
        }
    }
    if (z === n) {
        return true;
    } else { return false}
}
result = awesomeNumber(n);
alert(result); */
/*
let numMax, numMin,n, result;

numMin = +prompt('Введите нижнюю границу диапазона');
numMax = +prompt('Введите верхнюю границу диапазона');
function awesomeNumber (n) {
    let z,i;
    z = 0;
    for (i=1; i<n; i++) {
        if (n%i===0) {
            z = z+i;
        }
    }
    if (z === n) {
        return true;
    } else { return false}
}
for (n=numMin; n<numMax; n++) {
    awesomeNumber(n);
    result = awesomeNumber(n);
    if (result === true) {
        alert(`Число ${n} (диапазона от ${numMin} до ${numMax}) - совершенное!` );
    } 
}*/

/*
function getTime (h,m = '00',sec = '00') {
    return h + ':'+ m +':'+ sec;
} 

alert(getTime(13,25)); */
/*
function getSecunds (h,m,sec) {
    return sec+(m*60)+(h*3600);
}

alert(getSecunds(1,2,20)); */
/*
function getTimeFormat (sec) {
    if (sec<60) {
        return '00:00:'+ sec;
    }
    if (sec<=3600) {
        return '00:'+(Math.floor(sec/60))+':'+(sec - ((Math.floor(sec/60)*60)));
    } else {
        return (Math.floor(sec/3600)) +':'+ (Math.floor((sec -((Math.floor(sec/3600))*3600) )/60)) + ':' + ((sec -((Math.floor(sec/3600))*3600) )- ((Math.floor((sec -((Math.floor(sec/3600))*3600) )/60))*60)) ;
    }

}
alert(getTimeFormat(3700)); */ 

function timeDifference (startTimeHour,startTimeMin,startTimeSec, endTimeHour, endTimeMin, endTimesec) {
    let startTime, endTime, sec;
    startTime = ((startTimeHour*3600)+(startTimeMin*60)+startTimeSec);
    endTime = ((endTimeHour*3600)+(endTimeMin*60)+endTimesec);
    sec = startTime - endTime; 
    function getTimeFormat (sec) {
        if (sec<60) {
            return '00:00:'+ sec;
        }
        if (sec<=3600) {
            return '00:'+(Math.floor(sec/60))+':'+(sec - ((Math.floor(sec/60)*60)));
        } else {
            return (Math.floor(sec/3600)) +':'+ (Math.floor((sec -((Math.floor(sec/3600))*3600) )/60)) + ':' + ((sec -((Math.floor(sec/3600))*3600) )- ((Math.floor((sec -((Math.floor(sec/3600))*3600) )/60))*60)) ;
        }
    
    }
    return getTimeFormat(sec);
}

console.log(timeDifference (2,20,10,1,10,45));