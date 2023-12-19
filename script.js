let allTotal = 0;

function addToCart(element) {
    let mainEl = element.parentElement;
    let name = mainEl.querySelector('h2').innerText;
    let price = mainEl.querySelector('.price').innerText;
    let cartItems = document.querySelector('.kosarica-elements');

    price = price.substring(9);
    price = parseInt(price);

    allTotal += price;
    cartItems.innerHTML += `<div class ="single-element">
                            <h2>${name}</h2>
                            <p>Cijena: <span>${price}</span>$</p>
                            <button onclick="removeFromCart(this)">Vrati</button>
                            </div>`
    
    element.innerText = 'Gledas';
    element.setAttribute('disabled', 'true');
    element.style.backgroundColor = "red";

    document.querySelector('.kosarica-total h2').innerHTML = `Ukupno: ${allTotal}$`;
}

function removeFromCart(element) {
    let mainEl = element.parentElement;
    let price = mainEl.querySelector('span').innerText;
    let name = mainEl.querySelector('h2').innerText;
    let movies = document.querySelectorAll('.film');

    price = parseInt(price);
    allTotal -= price;
    document.querySelector('.kosarica-total h2').innerHTML = `Ukupno: ${allTotal}$`;
    mainEl.remove();

    movies.forEach(function(mov) {
        let itemName = mov.querySelector('.film h2').innerText;

        if (itemName === name) {
            mov.querySelector('.film button').innerText = 'Gledaj';
            mov.querySelector('.film button').removeAttribute('disabled');
            mov.querySelector('.film button').style.backgroundColor = "#5783db";
        }
    });
}