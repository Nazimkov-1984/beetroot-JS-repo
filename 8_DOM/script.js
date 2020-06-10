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
    let li = [document.createElement('li')];
   document.body.append(ol);

   ol.prepend(liFirst);
   ol.prepend(liSec);
   liSec.prepend(' '+playList[0].song);
   liSec.prepend(playList[0].author);
   liFirst.prepend(' '+playList[1].song);
   liFirst.prepend(playList[1].author);
  