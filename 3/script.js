/*
let numMin, numMax, result, startMin, count;

numMin = +prompt('Введите первое число диапазона','');
numMax = +prompt ('Введите второе число диапазона','');
result = 0;
startMin = numMin;
count = numMax-numMin;
for (i=1; i<=count; i++) {
    result = result + (numMin+1);
    numMin = numMin + 1 ;
}

result = result+startMin;
alert(`Сумма всех чисел от диапазона = ${result}`); */ 
let x,y,z;

x = +prompt('Введите первое число','');
y = +prompt('Введите второе число','');

if (y>x) {
    z = x;
    x = y;
    y = z;
}
while (true) {
    if (y == 0) alert(x);
        x %= y;
        if (x == 0) alert(y);
        y %= x;
}


/*
let userNum, result;
userNum = +prompt ('Введите число','');
result = [];
for (i=1; i<=userNum; i++) {
    if ((userNum%i) === 0) {
        result[i] = i;
    }
}
alert(result); */

/*
let userNumber, n;
userNumber = 0;
userNumber = prompt('Введите число','');

alert(userNumber.length); */ 
/*
let userArr, result, count, pNum, oNum, zeroNum, cheNum, notCheNum;
userArr = [];
count = 0;
pNum = 0;
oNum = 0;
zeroNum = 0;
cheNum = 0;
notCheNum = 0;
for( i=0; i<=9; i++) {
    ++count;
    userArr[i] = +prompt(`Введите ${count}-е число`,'');
    if (userArr[i]>0) {
        pNum = pNum + 1;
    }
    if (userArr[i]<0) {
        oNum = oNum + 1;
    }
    if (userArr[i]===0) {
        zeroNum = zeroNum + 1;
    }
    if ((userArr%2)===0) {
        cheNum = cheNum + 1;
    }
    if ((userArr%3)===0) {
        notCheNum = notCheNum + 1;
    }
 }
alert(`Положительных чисел - ${pNum} штук`);
alert(`Отрицательных чисел - ${oNum} штук`);
alert(`Чисел равных нулю - ${zeroNum} штук`);
alert(`Четных чисел - ${cheNum} штук`);
alert(`Нечетных чисел- ${notCheNum} штук`); */ 

/*
let firstNum, secondNum, result, status, operation;
    do {
        firstNum = +prompt('Введите первое число диапазона','');
        secondNum = +prompt ('Введите второе число диапазона','');
        operation = prompt ('Введите операцию + - / * ','');
        switch (operation) {
            case '+': {
                result = firstNum+secondNum;
                alert(`Результат- ${result}`); 
                break;
            }
            case '-': {
                result = firstNum-secondNum;
                alert(`Результат- ${result}`); 
                break;
            }
            case '*': {
                result = firstNum*secondNum;
                alert(`Результат- ${result}`); 
                break;
            }
            case '/': {
                result = firstNum/secondNum;
                alert(`Результат- ${result}`); 
                break;
            }
        }
        
        }
        while (confirm("Продолжить?")); */
        /*
        let userNum, shift;
        do {
            userNum = prompt("Введите число!",'');
            shift = prompt("Введите на сколько его сдвинут?",'');
            alert(userNum.substring(shift) + userNum.substring(0, shift));
        }
        while (confirm("Повторить?")); */
       /* 
let dayArr = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
let i = 0;

do {
    alert(dayArr[i]);
    i = i+1;
    if (i=>7) {i = 0}
} while (confirm("Продолжить?"));

*/
/*
let x,y,z;

x= 2;
for (x=2; x<=9; x++) {
    for(y=1; y<=10; y++){
        z= x*y;
        console.log (`${x} * ${y} = ${z}`);
    }
} */