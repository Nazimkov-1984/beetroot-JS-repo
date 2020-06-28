'use strict';

const inputFilm = document.querySelector('#film'),
    ol = document.querySelector('#list'),
    searchTitle = document.querySelector('#search-title'),
      btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
const filmName = inputFilm.value;
const request = new XMLHttpRequest();
request.open('GET',`http://www.omdbapi.com/?r=json&s=${filmName}&apikey=2a7d7e9f&`);
//request.setRequestHeader('Content-type','aplication/json','charset=utf-8');
request.send();
if(inputFilm.value.lenght===0) {
    inputFilm.value = "Введите фильм";
}
request.addEventListener('readystatechange', () => {
if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.response);
    searchTitle.textContent = "Результаты поиска:";
    for ( let i=0; i<10; i++) {
        const li = document.createElement('li');
        li.textContent = data.Search[i].Title;
      ol.append(li);
      const poster = document.createElement('img');
      poster.src = `${data.Search[i].Poster}`;
      li.append(poster);
      const year = document.createElement('p');
      year.textContent = data.Search[i].Year;
      li.append(year);
    };
   
} else {
    console.log('Error');
}
});
}) ;