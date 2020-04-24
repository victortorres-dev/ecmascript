// Operador de reposo -> extrae las propiedades de un objeto que aún no se ha construido
console.log('\n---------- Operador de reposo y propagación ... ----------')

// Uso del operador de reposo para separar los elementos
const obj = {
  name: 'Tavo',
  age: 25,
  country: 'MX'
}

const { country, ...all } = obj
console.log(all)

// Propagación -> unir uno o mas elemntos de objetos a un nuevo objeto
const obj2 = {
  ...obj,
  country: 'MX'
}
console.log(obj2)

// Finally en promesas -> permite saber cuando una promesa ha finalizado
console.log('\n---------- finally ----------')

const helloFinally = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello Promise'), 3000)
      : reject(new Error('Test Error'))
  })
}

helloFinally()
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => console.log('Finalizó la promesa'))

// Mejoras aadidas a rejex
console.log('\n---------- Agrupar bloques de rejex ----------')

/* Constitución de fecha año/mes/día  ->  /([valor del cero al nueve]{va a tener 4 valores})-(elemento mes [del0 al 9]){elementos que va a contener 2}-(elemento dia[0-9]{2})/   */

const regexData = /([ 0-9 ]{4})-([0-9]{2})-([0-9]{2})/
// Confiracion con match para validar si un dato coincide con el regex previo

const match = regexData.exec('2018-04-20')
console.log('Info match: ', match)

const date = match[0]
const year = match[1]
const month = match[2]
const day = match[3]

console.log('date:', date, '\nGroups: ', year, month, day)
