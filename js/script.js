/*
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione

Creare un carosello come nella foto allegata.

Milestone 0:
Come sempre focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/



// Array object
const countryPhotos = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// Struttura carousel
const displayImages = function(countryInfo){
    const showHTML = document.getElementById('show');
    const col = document.createElement('div');
    col.className = 'landscape-wrapper d-none';

    const structure = `
    <div class="container-info">
        <img class="countries" src="${countryInfo.url}" alt="${countryInfo.title}">
        <div class="info">
            <h2>${countryInfo.title}</h2>
            <h6">${countryInfo.description}</h6>
        </div>       
    </div>     
    `;
    col.innerHTML += structure;

    showHTML.append(col);
}

countryPhotos.forEach(displayImages);

// Struttura carousel - slideshow
function displayLand(){
    let sliderActive = 0;
    let sliderLandscape = document.querySelectorAll('.landscape-wrapper');
    sliderLandscape[sliderActive].classList.toggle('d-none');
    const slideshow = setInterval(function(){
        sliderLandscape[sliderActive].classList.toggle('d-none');
        sliderActive++;
        if(sliderActive == sliderLandscape.length){
            sliderActive = 0;
        }
        sliderLandscape[sliderActive].classList.toggle('d-none');
    }, 7000);

// Struttura carousel - button sx
    const buttonPrevious = document.querySelector('.toggle-land.toLeft');
    buttonPrevious.addEventListener('click', previousPhoto);
    function previousPhoto(){
        sliderLandscape[sliderActive].classList.toggle('d-none');
        sliderActive--;
        if(sliderActive < 0){
            sliderActive = sliderLandscape.length - 1;
        }
        sliderLandscape[sliderActive].classList.toggle('d-none');
    }

// Struttura carousel - button dx
    const buttonNext = document.querySelector('.toggle-land.toRight');
    buttonNext.addEventListener('click', nextPhoto);
    function nextPhoto(){
        sliderLandscape[sliderActive].classList.toggle('d-none');
        sliderActive++;
        if(sliderActive == sliderLandscape.length){
            sliderActive = 0;
        }
        sliderLandscape[sliderActive].classList.toggle('d-none');
    }

}

displayLand();