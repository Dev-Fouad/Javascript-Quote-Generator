//Variables

let quote = document.querySelector('.quote')
// console.log(quote.textContent)
let person = document.querySelector('.person')
// console.log(person.textContent)
let btn = document.querySelector('#new-quote');
// console.log(btn.textContent)

let quotes = [{
    quote: `"Ojulari A Wa Omeni to lo UK😂"`,
    person: `2022`
}, {
    quote: `"If you want to live a happy life, tie it to a person or things."`,
    person: `Tim Cook`
}, {
    quote: `"Your time is limited, so dont waste living someelse's life"`,
    person: `Steve Jobs`
}, {
    quote: `"I will humble you"`,
    person: `Javascript`
}, {
    quote: `"Tell me and I forgrt. Teach me and I remember. Involve me and i will learn."`,
    person: `Benjami Franklin`
}, {
    quote: `"The best way to find yourself is to lose yourself in the Services of others."`,
    person: `Mahatma Gandhi`
}, {
    quote: `"If you look at what you have in life, you will always have more. If you look at what you don't have in life, you will never have enough "`,
    person: `Sapa`
}, {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke"`,
    person: `Dalia lama`
}, {
    quote: `"It does not matter how slowly you go as long as you did not stop"`,
    person: `Fouad`
}, {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr`
}];


btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
