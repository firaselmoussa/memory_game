
const cards = Object.values(document.getElementsByClassName('card'));
const images = ['images/java-logo.jpg',
                'images/javascript-logo.png',
                'images/python-logo.png'];
const restart_btn = document.getElementById('restart');
const score_span= document.getElementById('score')
let score = 0;
// The purpose of the functions below is to merely eliminate repitition in randome numbers.
function getRandInt(min, max){

    return  Math.floor(Math.random() * (max - min+1)) + min;

}
// create Range
function createRange(start, end){
    let range = [];
    for(let i = start;  i <= end; i++){
        range.push(i);
    }
    return range;
}

let numbers = createRange(0, images.length-1);

// placing images
for(i = 1; i<= cards.length; i+=2){

    let randomIndex = getRandInt(0, numbers.length-1);
    let randomNumber = numbers[randomIndex];
    numbers.splice(randomIndex, 1);

    cards[i].setAttribute('src', images[randomNumber]);
    cards[i-1].setAttribute('src', images[randomNumber]);
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
                    
                    // ``&& card_1 != card`` this is to prevent user from clicking on the same pic twice to win
                    if(card_1.src == card.src && card_1 != card){
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


// RESTART FUNCTIONALITY
restart_btn.addEventListener('click', ()=>{
    window.location.reload();
})
