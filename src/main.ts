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
console.log(`Your first number ${firstOperand}.`)
const secondOperand = Number(
  window.prompt('Thank you! please pick another number')
)
console.log(`Your second number ${secondOperand}.`)

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

const numbers = [
  13778, 14852, 38600, 16605, 13509, 29827, 26232, 23050, 19815, 22501, 28872,
  39867, 43527, 11963, 31970,
]

const arrayMath = {
  smallest: numbers[0],
  largest: numbers[0],
  sum: 0,
  average: 0,
}

for (let count = 1; count < numbers.length; count++) {
  if (arrayMath.smallest > numbers[count]) {
    arrayMath.smallest = numbers[count]
  }
}

for (let count = 0; count < numbers.length; count++) {
  if (arrayMath.largest < numbers[count]) {
    arrayMath.largest = numbers[count]
  }
}

for (let count = 0; count < numbers.length; count++) {
  arrayMath.sum += numbers[count]
}

arrayMath.average = arrayMath.sum / numbers.length

console.log(
  `Heres some interesting information, the smallest number in the array is ${arrayMath.smallest}`
)
console.log(`The largest number in the array is ${arrayMath.largest}`)
console.log(`The sum of the array is ${arrayMath.sum}`)
console.log(`and the average of the array is ${arrayMath.average}`)
