console.log('\n---------- Entries ----------')
// Entries: transformar un ojeto en matriz
const data = {
  frontend: 'Tav',
  backend: 'Fernanda',
  design: 'Brenda'
}

const entries = Object.entries(data) // retorna un arreglo
console.log(entries)

// Saber cuantos elementos contiene un objeto
console.log('Elementos del objeto: ', entries.length)

// Object values -> devuelve los valores de un objeto a un arreglo
console.log('\n---------- Object values ----------')

// Transformacion del objeto "data", retorna los valores, ignora la asignacion
const values = Object.values(data)
console.log(values)
console.log('Total values: ', values.length)

// Pad -> transforma un string
console.log('\n---------- Pad ----------')
// anteponer una cadena al string o agregar mas elementos -> padStart(maxLenght, caracteres a aadir;
// el string inicial y los caracteres a añadir deben ser de maximo, el valor asignado en maxLenght)
const string = 'hello'
console.log(string.padStart(11, 'Start-'))
console.log(string.padEnd(9, '-End'))
console.log('string'.padEnd(12, ' ------'))

// Training commas -> Establece que puede o no haber un elemento final en el objeto
console.log('\n---------- Training commas  ----------')

// const obj = {
//   name: 'Tavo',
// }

// Async await ->  Comportamiento asincronico
console.log('\n---------- Async await  ----------')

const hellWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
}

// await para los llamados
const helloAsync = async () => {
  const hello = await hellWorld()
  console.log(hello)
}

helloAsync()
  .then((result) => {
    console.log('Resultado: ', result)
  })
  .catch((err) => {
    console.log('Error: ', err)
  })

// Una mejor forma de trabajar el asincronismo
const anotherFunction = async () => {
  try {
    const hello = await hellWorld()
    console.log(hello)
  } catch (error) {
    console.log(error)
  }
}

anotherFunction()
