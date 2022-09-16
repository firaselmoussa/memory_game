// const cards = document.getElementsByClassName('card');
const cards = Object.values(document.getElementsByClassName('card'));
const images = ['images/java-logo.jpg',
                'images/javascript-logo.png',
                'images/python-logo.png'];
const score_span= document.getElementById('score')
let score = 0;

// placing images
for(i =1; i<= cards.length; i+=2){
    var random_index = Math.floor(Math.random() * 3);
    cards[i].setAttribute('src', images[random_index]);
    cards[i-1].setAttribute('src', images[random_index]);
}

window.addEventListener('load', ()=>{
    cards.forEach(card => {
        card.classList.add('hidden');
    });
});



cards.forEach(card => {
    card.addEventListener('click', () => {

        if(card.classList.contains('out')){
            // 
        }else{
            card.classList.add('shown');

            cards.forEach(card_1 => {
                card_1.addEventListener('click', () => {
                    
                    if(card_1.src == card.src){
                        score+= 1;
                        score_span.innerText = score;
                        card_1.classList.add('out');
                        card.classList.add('out');
                    }

            // end of inner foreach
                });
            });
        }

// end of outer foreach
});
});

