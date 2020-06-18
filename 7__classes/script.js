/*
class Circle {
    constructor(radius) {
        this.radius = Number(radius);
    } 
    get Radius () {
        return this.radius;
    }
    set staticRadius(newValue) {
        this.radius = newValue;
    }
    get Diametr (radius) {
        return this.Diametr = staticRadius*2;
    } 
    calcSq (radius) {
            console.log (this.radius*this.radius*3.14);
    } 
    calcLength (radius) {
         console.log(radius*3.14*2);
    }
}

const circle2 = new Circle (50); // создаем новый объект окружность с помощью класса Circle

circle2.calcLength(50); // выводим длину окружности 


class simpleMarker {
    constructor(color, container) {
        this.color = color;
        this.container = container;
    }
    printMarker(text, container) {
        const inkConsuption = 0.5;
        let endPositionString, modifityString;
        endPositionString = (container / inkConsuption) + 1;
        modifityString = text.substr(0, endPositionString);
        document.write(`<p style = "color: ${this.color}"> ${modifityString}</p>`);
    }
}

const NewMarker = new simpleMarker("blue", 50);

NewMarker.printMarker("Lorem ipsum dolor sit amet consectetur adipisicing elit.Culpa fugiat expedita perferendis atque ipsam iure repudiandae eius illum. ", 5); // выводим на экран браузера текст длинной равной кол-ву чернил 

class recyclingMarker extends simpleMarker { //создаем клас с перезаряжаемым маркером 
    refillMarker (newInk) { // метод дозарядки маркера
        this.container = this.container + newInk;
    }
}

const newRecyclingMarker = new recyclingMarker ("black", 30);

newRecyclingMarker.refillMarker(50); // добавляем к исходному маркеру в 30% еще 50 % 

console.log (newRecyclingMarker.container); // выводим в консол кол-во чернил ( 80% ) */

class Employee { //класс для работников банка
    constructor (firstName, lastName, age, position){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
    }
}

const Employee1 = new Employee('Ivan', 'Ivanov', 35, 'economist'); //создаем новых экземпляров работников банка
const Employee2 = new Employee ('Petr', 'Petrov', 25, 'security');
const Employee3 = new Employee('Anna', 'Sidorova', 42, 'manager');
const bankEmployees = [Employee1, Employee2, Employee3]; // создаем массив работников банка

class EmpTable { // класс для генерации HTML 
constructor (arr) {
    this.arr = arr;
}
getHtml (arr) {
    document.write(`<table id="table" border = "1"> <tr><td> First Name </td><td> Second Name </td><td> Age </td><td> Position </td></tr> </table>`);
    const table = document.getElementById('table');
    for (let i = 0; i < arr.length; i++) {
    const row = document.createElement('TR');
    table.appendChild(row);
    const firstCell = document.createElement("TD");
    const secondCell = document.createElement("TD");
    const thirdCell = document.createElement("TD");
    const fourCell = document.createElement("TD");
    row.appendChild(firstCell);
    row.appendChild(secondCell);
    row.appendChild(thirdCell);
    row.appendChild(fourCell);
    firstCell.innerHTML = bankEmployees[i].firstName;
    secondCell.innerHTML = bankEmployees[i].lastName;
    thirdCell.innerHTML = bankEmployees[i].age;
    fourCell.innerHTML = bankEmployees[i].position;
    }
}
}

const  newEmpTable = new EmpTable (bankEmployees);
newEmpTable.getHtml (bankEmployees);