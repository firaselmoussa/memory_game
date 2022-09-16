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
        // if(card.classList.contains('shown')){

        // }
        if(card.classList.contains('out')){
            // card.classList

        }else{
        
            card.classList.add('shown');
            
            cards.forEach(card_1 => {
                card_1.addEventListener('click', () => {

            cards.forEach(card_2 => {
                card_2.addEventListener('click', () => {
                    
                    if(card_1.src == card_2.src){
                        console.log('true')
                    }else{
                        console.log('false')
                    }
                    card_1.classList.add('out');
                    card_2.classList.add('out');
                    

                // end of second inner foreach
                });
            });

            // end of first inner foreach
                });
            });
        }
// end of outer foreach
});
});

