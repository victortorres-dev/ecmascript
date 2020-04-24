// Includes, una alternatia a index of, para determinar si un alemente existe dentro de un arreglo o string
console.log('\n---------- Includes ----------')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const isInclude = numbers.includes(12)

if (isInclude) {
  console.log('Si se encuentra el valor: ', isInclude)
} else {
  console.log('No se encuentra el valor: ', isInclude)
}

// Elevar a una potencia

const base = 2
const exponent = 3
const result = base ** exponent

console.log(base, 'a la', exponent, '=', result)
