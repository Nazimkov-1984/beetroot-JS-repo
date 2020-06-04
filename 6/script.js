"use strict"
/*
let productApple = {
    name: "apple",
    quantity: 10,
    bought: false,
};
let  productCorn = {
    name: "corn",
    quantity: 5,
    bought: false,
};
let  productMilk = {
    name: "milk",
    quantity: 5,
    bought: true,
};
let productWater = {
    name: "mineral water",
    quantity: 2,
    bought: false,
}
let productSoap = {
    name: "soap",
    quantity: 1,
    bought: false,
}
let shoppingList = [productApple, productCorn, productMilk];

function sortByBought (arr) {
    arr.sort ((a,b) => a.bought === false ? 1 : -1);
}

sortByBought (shoppingList);

console.log (shoppingList); 



function addInShoppingList (arr,product){ // добавление элемента в массив 
    function isUseInMassiv (arr, product) {
        for ( let i = 0; i < arr.length; i++) {
            if (arr[i]==product) {
                arr[i].quantity++;
                return true;
            }
             else {
                return false;
            }
        }
       };
if (isUseInMassiv(arr, product) === false) {
    arr.push (product);
} else {
    
}
};
addInShoppingList(shoppingList, productMilk); // вызов функции добавления элемента в массив
console.log (shoppingList); // вывод в консоль элемента добавленного в массив 

function buyProduct (arr, productName) {
    for ( let i= 0; i< arr.length; i++) {
        if (arr[i].name === productName){
            arr[i].bought = true; 
        }
    }
}

buyProduct(shoppingList,"apple");
console.log(shoppingList); //выводим в консоль массив где "яблоко" отмечено как купленное 

const objBanana = {
    name: "banana",
    quantity: 5,
    price: 10,
},
objMilk = {
name: "milk",
quantity: 2,
price: 15,
}, 
objSoap = {
    name: "soap",
    quantity: 3,
    price: 20,
};
let chekShop = [objBanana,objMilk, objSoap];
function printChek (arr) { // фунция печати чека на экран
    for (let i = 0; i < arr.length; i++) {
        console.log (`${i}) Product- ${arr[i].name}; Qantity - ${arr[i].quantity} p. ; price- ${arr[i].price} dollars.`);
    }
}

printChek(chekShop); // выводим на экран чек 

function summChek (arr) { // функция подсчета суммы всех покупок
    let summ = 0;
 for ( let i=0; i< arr.length; i++) {
     summ = summ + arr[i].price;
 };
 return summ;
}

console.log ("Total: "+summChek(chekShop)+" dollars"); // выводим на экран сумму покупок


function mediumPriceInChek (arr) { // функция подсчета средней стоимости товара в чеке 
    let result = 0; 
    result = summChek(arr) / arr.length;
    return result;
}

console.log ("Medium price in chek : "+mediumPriceInChek(chekShop)+" dollars"); // выводим среднюю стоимость в консоль
const objColor = {
style : "color",
value : "red"
},
    objFontSize = {
        style: "font-size",
        value: "50px"
    },
    objAlign = {
        style: "text-decoration",
        value: "underline",
    };

   const  cssStyle = [objColor, objFontSize, objAlign];

    function createText (style, text) { // создаем на странице текст и загружаем для него массив со стилями
        document.write (` <p style = "${style[0].style}:${style[0].value}; ${style[1].style}:${style[1].value};${style[2].style}:${style[2].value};">${text}</p>`);
    }

    createText (cssStyle, "Hello world"); // выводим на экран стилизованный текст */

const objClass101 = {
    name: "First",
    quantity: 20,
    facultet: "физ-мат"
}, 
    objClass102 = {
        name: "Second",
        quantity: 10,
        facultet: "филологический"    
    },
    objClass103 = {
        name: "Third",
        quantity: 12,
        facultet: "историко-философский"   
    }, 
    clasess = [objClass101, objClass102, objClass103];

    function printClass (arr) { // фунция просмотра аудиторий 
        for (let i = 0; i < arr.length; i++) {
            console.log (`${i}) Аудитория № ${arr[i].name}; Кол-во посадочных мест- ${arr[i].quantity}; Факультет - ${arr[i].facultet}.`);
        }
    };

    printClass (clasess);// выводим в консоль список всех аудиторий 

    function printClassOfFacultet (arr, facultet) { // функция просмотра аудиторий принадлежащих факультету
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].facultet === facultet) {
                console.log (`Аудитория № ${arr[i].name}; Кол-во посадочных мест- ${arr[i].quantity}.`)
            }
            
        }
    };

    printClassOfFacultet (clasess, "физ-мат"); // выводим в консоль список всех аудиторий принадлежащих физ-мат фак-ту

    const group = {
        name: "fe02062020",
        quantity: 16,
        facultet: "физ-мат"
    };

    function findClassForGroup (arr, group) { // функция для поиска подходящей аудитории для группы 
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].quantity === group.quantity ||arr[i].quantity > group.quantity ) {
                console.log (`Аудитория № ${arr[i].name} подходит для группы ${group.name} !`)
            }
            
        }
    };
    findClassForGroup (clasess, group); // выводим на экран подходящие аудитории 

function classSortQuantity (arr) { // функция сортировки классов по кол-ву посадочных мест (по убыванию)
    arr.sort(function (a,b) {
        return a.quantity - b.quantity;
    });
};
    classSortQuantity (clasess);
    console.log (clasess); // выоводим отсортированный массив аудиторий  на экран 

    function classSortName(arr) { // функция сортировки классов по кол-ву посадочных мест (по убыванию)
        arr.sort();
    };
        classSortQuantity (clasess);
        console.log (clasess); // выоводим отсортированный массив аудиторий  на экран 

