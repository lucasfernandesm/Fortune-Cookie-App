// Phrases

let phrases = []
phrases [0] = 'A vida trará coisas boas se tiver paciência.'
phrases [1] = 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.'
phrases [2] = 'A maior de todas as torres começa no solo.'
phrases [3] = 'A juventude não é uma época da vida, é um estado de espírito.'
phrases [4] = 'Não importa o tamanho da montanha, ela não pode tapar o sol.'
phrases [5] = 'Todas as coisas são difíceis antes de se tornarem fáceis.'
phrases [6] = 'Você é do tamanho do seu sonho.'
phrases [7] = 'Nós somos o que pensamos.'
phrases [8] = 'A inspiração vem dos outros. A motivação vem de dentro de nós.'
phrases [9] = 'Realize o óbvio, pense no improvável e conquiste o impossível.'
phrases [10] = 'Você sempre será a sua melhor companhia!'

// Variables

let luckyNumber = Math.round(Math.random() * 10)

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnClick = document.querySelector("img#btnClick")
const btnReturnClick = document.querySelector("#btnClickReturn")

// Events

btnClick.addEventListener('click',handleClick)
btnReturnClick.addEventListener('click',handleReturnClick)
document.addEventListener('keydown',pressEnter)

// Functions

function handleClick(event) {
    event.preventDefault()

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")

    document.querySelector(".message p").innerText = phrases[luckyNumber]

    luckyNumber = Math.round(Math.random() * 10)
}

function handleReturnClick(event) {
    event.preventDefault()

    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnter(e) {
    if(e.key == 'Enter' && screen1.classList.contains("hide")) {
        handleReturnClick(event)
    }
    else if(e.key == 'Enter' && screen2.classList.contains("hide")) {
        handleClick(event)
    }
}