const div = document.getElementById('div_text'),
textarea = document.getElementById('textarea_text');


document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyE' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
      div.style.display = "none";
      textarea.style.display = "block";
      const text = div.textContent;
        textarea.textContent = text;
    }
  });

  document.addEventListener('keydown', function(event) {
    if ((event.code == 'Equal' && (event.ctrlKey || event.metaKey)) || (event.code == 'NumpadAdd' && (event.ctrlKey || event.metaKey)) ) {
        event.preventDefault();
      div.style.display = "block";
      textarea.style.display = "none";
      let textmod = (document.getElementById('textarea_text').value);
      div.textContent = textmod;
    }
  });

   // end 
  function randomInteger(min, max) {  // создаем случайные целые числа для того чтобы заполнить ячейки таблицы 
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  
  const table = document.getElementById('myTable'); //создаем таблицу их массива случайных чисел 
  let arr = [[randomInteger(1,50),randomInteger(1,50),randomInteger(1,50),randomInteger(1,50)], [randomInteger(1,50), randomInteger(1,50), randomInteger(1,50),randomInteger(1,50)], [randomInteger(1,50), randomInteger(1,50), randomInteger(1,50),randomInteger(1,50)]];

  function fillTable (table, arr) { // функция создания таблицы из двумерного массива 
      for (let i = 0; i <arr.length; i++) {
          let tr = document.createElement('tr');
          for (let j= 0; j< arr[i].length; j++) {
            let td = document.createElement('td');
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
          }
         table.appendChild(tr);  
      }
  }

  fillTable(table,arr); // рисуем таблицу на экране браузера 

  const rus = document.getElementById('rus'), // получаем заголовки таблицы со страницы 
  gb = document.getElementById('gb'),
  eu = document.getElementById('eu'),
  l = document.getElementById('l');
  
  function compareNumbers(a, b) { // сравнение чисел по возрастанию 
    return a - b;
  }



  rus.onclick =  function () {
      const newArr = [];
    for (let i =0; i<arr.length; i++) { // получаем столбец двумерного массива в отдельный массив
       newArr[i]= (arr[i][0]); 
       newArr.sort (compareNumbers);   // сортируем полученный массив (столбец)
    }
for (let i = 0; i< arr.length; i++) { // записываем элементы отсортированного массива но соответсвующие позиции в исходный массив 
    (arr[i][0]) = newArr [i];
}
let mytd = document.querySelectorAll('td');

while(table.rows.length > 1) {
  table.deleteRow(1);
}
fillTable(table,arr); // перерисовываем таблицу
  }
  
  gb.onclick =  function () {
    const newArr = [];
  for (let i =0; i<arr.length; i++) { // получаем столбец двумерного массива в отдельный массив
     newArr[i]= (arr[i][1]); 
     newArr.sort (compareNumbers);   // сортируем полученный массив (столбец)
  }
for (let i = 0; i< arr.length; i++) { // записываем элементы отсортированного массива но соответсвующие позиции в исходный массив 
  (arr[i][1]) = newArr [i];
}
let td = document.querySelectorAll('td');
while(table.rows.length > 1) {
  table.deleteRow(1);
fillTable(table,arr); // перерисовываем таблицу
}

eu.onclick =  function () {
    const newArr = [];
  for (let i =0; i<arr.length; i++) { // получаем столбец двумерного массива в отдельный массив
     newArr[i]= (arr[i][2]); 
     newArr.sort (compareNumbers);   // сортируем полученный массив (столбец)
  }
for (let i = 0; i< arr.length; i++) { // записываем элементы отсортированного массива но соответсвующие позиции в исходный массив 
  (arr[i][2]) = newArr [i];
}
let td = document.querySelectorAll('td');
while(table.rows.length > 1) {
  table.deleteRow(1);
fillTable(table,arr); // перерисовываем таблицу
}

l.onclick =  function () {
    const newArr = [];
  for (let i =0; i<arr.length; i++) { // получаем столбец двумерного массива в отдельный массив
     newArr[i]= (arr[i][3]); 
     newArr.sort (compareNumbers);   // сортируем полученный массив (столбец)
  }
for (let i = 0; i< arr.length; i++) { // записываем элементы отсортированного массива но соответсвующие позиции в исходный массив 
  (arr[i][3]) = newArr [i];
}
let td = document.querySelectorAll('td');
while(table.rows.length > 1) {
  table.deleteRow(1);
fillTable(table,arr); // перерисовываем таблицу
}

///end

let block; // Основной блок
let block_r; // Блок для изменения размеров
let delta_w = 0; // Изменение по ширине
let delta_h = 0; // Изменение по высоте

    block = document.getElementById("block"); // Получаем основной блок
    block_r = document.getElementById("block_resize"); // Получаем блок для изменения размеров
    document.onmouseup = clearXY; // Ставим обработку на отпускание кнопки мыши
    block_r.onmousedown = saveWH; // Ставим обработку на нажатие кнопки мыши

  /* Функция для получения текущих координат курсора мыши */
  function getXY(obj_event) {
    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
    }
    return new Array(x, y);
  }
  function saveWH(obj_event) {
    var point = getXY(obj_event);
    w_block = block.clientWidth; // Текущая ширина блока
    h_block = block.clientHeight; // Текущая высота блока
    delta_w = w_block - point[0]; // Измеряем текущую разницу между шириной и x-координатой мыши
    delta_h = h_block - point[1]; // Измеряем текущую разницу между высотой и y-координатой мыши
    document.onmousemove = resizeBlock;
  }
  /* Функция для измерения ширины окна */
  function clientWidth() {
    return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
  }
  /* Функция для измерения высоты окна */
  function clientHeight() {
    return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
  }
  /* При отпускании кнопки мыши отключаем обработку движения курсора мыши */
  function clearXY() {
    document.onmousemove = null;
  }
  function resizeBlock(obj_event) {
    var point = getXY(obj_event);
    new_w = delta_w + point[0]; // Изменяем новое приращение по ширине
    new_h = delta_h + point[1]; // Изменяем новое приращение по высоте
    block.style.width = new_w + "px"; // Устанавливаем новую ширину блока
    block.style.height = new_h + "px"; // Устанавливаем новую высоту блока
    /* Если блок выходит за пределы экрана, то устанавливаем максимальные значения для ширины и высоты */
    if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = (clientWidth() - block.offsetLeft)  + "px";
    if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = (clientHeight() - block.offsetTop) + "px";
  }