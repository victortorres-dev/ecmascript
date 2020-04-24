// Comprendiendo las caracteristica añadidas a E6

// ---------------- Parametros por defecto antes de ECMAScript 6
console.log('---------- Parametros por defecto ----------')

function newFunction (name, age, country) {
  var name = name || 'Default1'
  var age = age || 32
  var country = country || 'CDMX'
  console.log(name, age, country)
}

// Parametros por defecto en ECMAScript6 (desde la asignacion de los parametros)
function newFunctionE6 (name = 'Default2', age = 32, country = 'CDMX') {
  console.log(name, age, country)
}

newFunction()
newFunctionE6()
newFunctionE6('Tavo', 22, 'Chiapas')

// ---------------- Template literals
console.log('\n---------- Template literals ----------')

const hi = 'Hello'
const name = 'World'

const phrase = `${hi} ${name}`
console.log(phrase)

// Destructuracion de elementos
console.log('\n---------- Destructuracion de elementos ----------')

// Antes de ES6
const person = {
  name2: 'oscar',
  age2: 25,
  country2: 'MX'
}

console.log(person.name2, person.age2)

// Con ES6

const { name2, age2 } = person
console.log(name2, age2)

// Operador de propagación
console.log('\n---------- Operador de propagación ----------')

const team1 = ['Tavo', 'Fer', 'Brenda']
const team2 = ['Jonathan', 'Reyna', 'Betito']

const newTeam = ['Karlita', ...team1, ...team2]

console.log(newTeam)

// Variables
console.log('\n---------- Variables ----------')

// let solo disponible en el scope(bloque de código en el cual es llamado)
{
  var globalVar = 'Global -- var --'
}

{
  let localLet = 'Local scope -- let --'
  console.log('local scope for --let-- : ', localLet) // Output -> 'Local scope -- let --'
  localLet = 'let is reasignable'
  console.log(localLet) // Output -> 'is reasignable'
}

console.log('global scope for --var-- : ', globalVar)
// console.log('not global scope for --let-- : ', localLet) // Output -> error

// const no es reasignale, tembién es de scope local
const a = 'b'

/*
a = 'a'
console.log('const is not reasignale: ', a) // Output -> error
*/

console.log('const is not reasignale: ', a) // Output -> b

// Propiedad de objetos mejorada
console.log('\n---------- Propiedad de objetos mejorada ----------')

const name3 = 'Tavo'
const lastName = 'Torres'

// ES5
const objES5 = { name: name3, lastName: lastName }
console.log('ojeto en ES5: ', objES5)

// ES6
const objES6 = { name3, lastName }
console.log('ojeto en ES6: ', objES6)

// Arrow functions
// Solventan una sintaxis mas reducida (son funciones anonimas) y un this no vinculable
console.log('\n---------- Arrow functions ----------')

const names = [
  { name: 'Fer', age: 24 },
  { name: 'Tavo', age: 25 }
]

// antes de ES6
let listOfNames = names.map(function (item, index) {
  console.log(`Nombre ${index}: `, item.name)
})

// con ES6
const listOfNames2 = names.map((item, index) => {
  console.log(`() => Nombre ${index}: `, item.name)
})

// Otras formas de trabajar/escriir con arrow functions
const listOfNames3 = (name, age) => {
  // bloque de código a ejecutar
}

// Pase de un único parámetro
const listOfNames4 = name => {
  // bloque de código a ejecutar
}

// retorno de valor
const square = num => num * num
console.log(square(2))

// Promesas
// Trabajan el asincronismo, Repara el problema de los callbacks hell(no escalables)
console.log('\n---------- Promesas ----------')

const helloPrimise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!! it's ok")
    } else {
      reject('Ups!!')
    }
  })
}

helloPrimise()
  .then((result) => {
    console.log('Promesa resuleta: ', result)
  })
  .then((result) => {
    console.log('Un then encadenado')
  })
  .catch((err) => {
    console.log('Promesa rechazada: ', err)
  })

// Clases
// Sintaxis más clara para manejar objetos y herencia
console.log('\n---------- Clases ----------')

// el constructor inicializa una clase

class Calculator {
  constructor () {
  // El constructor hace la asignacion de variables dentro de un scope global
    this.valueA = 0
    this.valueB = 0
  }

  // metodo
  sum (valueA, valueB) {
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

// Utilizar la clase creada
const calc = new Calculator()
console.log('resultado de la suma: ', calc.sum(5, 3))

// Import - Export of modules
// Importar modulos externos para poder utilizarlos en alguna seccion en otro archivo
console.log('\n---------- Import - Export of modules ----------')

// import { hello } from './module.js'

// hello()

console.log('\n---------- Generators ----------')
// Retorna una serie de valores segun el algoritmo definido

function * helloWorld () {
  if (true) {
    yield 'Hello, ' // Recuerda los estados de una condicion asado en algun algoritmo
  }
  if (true) {
    yield 'world' // Recuerda los estados de una condicion asado en algun algoritmo
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
