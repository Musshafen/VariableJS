import './style.css'

let numberOfCupsOfCoffee = 0

let fullName = 'Kelly Musshafen'

const aboutMe = {
  fullName: fullName,
  luckyNumber: 12,
  favoriteMovies: ['Aladdin, The Dark Knight, The Life of David Gale'],
}

console.log(
  `Hello! My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee per day. My favorite number is ${aboutMe.luckyNumber}!`
)

const userName = window.prompt('What is your name? ')

if (userName === null || userName === '') {
  console.log('Ah ah ah, seems like you do not want to share!')
} else {
  console.log(`Hello ${userName}! It is nice to meet you!`)
}

const firstOperand = Number(
  window.prompt("Let's do some math! Please pick a number.")
)
console.log(`You chose ${firstOperand}.`)
const secondOperand = Number(
  window.prompt('Thank you! please pick another number')
)
console.log(`You chose ${secondOperand}.`)

let sum = firstOperand + secondOperand
let difference = firstOperand - secondOperand
let product = firstOperand * secondOperand
let quotient = firstOperand / secondOperand

console.log(
  `Check this out! If you add ${firstOperand} with ${secondOperand}, you will get ${sum}, Cowabunga, dude?`
)
console.log(
  `If you subtract ${firstOperand} from ${secondOperand}, you will get ${difference}`
)
console.log(
  `To be continued! If you multiply ${firstOperand} with ${secondOperand}, you will get ${product}!`
)
console.log(
  `And last but definitely not least, if you divide ${firstOperand} from ${secondOperand}, you will get ${quotient}.`
)
