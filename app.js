// const cards = document.getElementsByClassName('card');
const cards = Object.values(document.getElementsByClassName('card'));
const images = ['images/java-logo.jpg',
                'images/javascript-logo.png',
                'images/python-logo.png'];

// placing images

for(i =1; i<= cards.length; i+=2){
    var random_index = Math.floor(Math.random() * 3);
    cards[i].setAttribute('src', images[random_index]);
    cards[i-1].setAttribute('src', images[random_index]);

}





cards.forEach(card => {
    card.addEventListener('click', () => {
        
    });
});
