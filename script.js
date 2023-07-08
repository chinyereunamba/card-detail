const number = document.getElementById('card_number')
const numberInCard = document.querySelector('.front .number p')
const cvc = document.getElementById('cvc');
const cardCVC = document.querySelector('.back .content p');
const cardName = document.getElementById('name')
const nameInCard = document.querySelector('.front .name p')
const cardMonth = document.getElementById('month')
const monthInCard = document.querySelector('.front .month')
const cardYear = document.getElementById('year')
const yearInCard = document.querySelector('.front .year')


number.addEventListener('keypress', () => {
    if (number.value.length == 4) {
        number.value += " "
    }
    if (number.value.length == 9) {
        number.value += " "
    }
    if (number.value.length == 14) {
        number.value += " "
    }
numberInCard.textContent = number.value

}) 

cvc.addEventListener('keyup', () => {
    cardCVC.textContent = cvc.value
})

cardName.addEventListener("keyup", () => {
    nameInCard.textContent = cardName.value
})

cardMonth.addEventListener("keyup", () => {
    monthInCard.textContent = cardMonth.value
})
cardYear.addEventListener("keyup", () => {
    yearInCard.textContent = cardYear.value
})