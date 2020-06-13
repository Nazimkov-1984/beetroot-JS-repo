"use strict";
const playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];
    
    const ol = document.createElement('ol');
   
   document.body.append(ol);


       for (let prop in playList) { // выводим в цикле список
        const li= document.createElement('li');
           ol.append(li);
        li.append(playList[prop].author + ' - ');
        li.append(playList[prop].song);
      } 
   
   "use strict"; 
const btn = document.getElementById('button'),
      modal = document.getElementById('myModal'),
      modalButton = document.getElementById('modalButton');

btn.onclick = function () {
    modal.style.display = "block";
};

modalButton.onclick = function() {
    modal.style.display = "none";
}

const btnS = document.getElementById('btnS'),
        red = document.getElementById('red'),
        yellow = document.getElementById('yellow'),
        green = document.getElementById('green');


btnS.onclick = function() {
let compstyle = window.getComputedStyle(red),
    compstyle1 = window.getComputedStyle(yellow),
    comstyle2 = window.getComputedStyle(green);

    if (compstyle.backgroundColor ==="rgb(255, 0, 0)") {
        yellow.style.backgroundColor = 'yellow';
        red.style.backgroundColor = "transparent";
    } else {
    if (compstyle1.backgroundColor ==="rgb(255, 255, 0)") {
            green.style.backgroundColor = "green";
            yellow.style.backgroundColor = "transparent";
            console.log(compstyle.backgroundColor,compstyle1.backgroundColor,compstyle2.backgroundColor); 
        } } 
    if (comstyle2.backgroundColor === "rgb(0, 128, 0)") {
            red.style.backgroundColor = 'red';
            green.style.backgroundColor = 'transparent';
        } 
}; 
      