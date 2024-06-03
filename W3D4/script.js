// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS


//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

function changeH1() {
    const h1 = document.getElementsByTagName(`h1`)[0];
    console.log('Prima della modifica:', h1.textContent);    
    h1.textContent = "MY SHOP";
    console.log('Dopo la modifica:', h1.textContent);

}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function changeBGColor() {
    document.body.style.backgroundColor = 'aquamarine';
}



// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeAdress() {
    const adress = document.getElementById('adress');
    adress.textContent = "Via da Qui, 1/A - 83749 Arcadia";
}
changeAdress();

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function addClassToLink() {
    const links = document.getElementsByTagName('a');
    for (let i = 0 ; i < links.length ; i++) {
        links[i].classList.add('amazon-link');
    }
}
addClassToLink();


// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function showHideImg() {
    let img = document.getElementsByTagName('img');
    for (let i = 0 ; i < img.length ; i++) {
        if (img[i].classList.contains('hidden')) {
            img[i].classList.remove('hidden')
        }
        else {
            img[i].classList.add('hidden')
        }
    }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
 function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changePriceColor() {
    let color = randomColor();
    console.log(color);
    let price = document.querySelectorAll('.price');
    for (let i = 0 ; i < price.length ; i++) {
        price[i].style.color = color;
    }
}
