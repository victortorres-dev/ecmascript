// Flat -> devuelve una matriz con cualquier submatriz aplanada("anidada")
// Flat recibe como argumento la profundidad
// por defecto flat(), solo obtiene un nivel
console.log('\n---------- flat() ----------')

const array = [1, 2, 3, [1, 2, 3, [1, 'f', 3]]]

console.log(array)
console.log(array.flat(3))

// flatMap -> mapea cada elemento y despues se le pasa una funcion para aplanar, segun el resultado
console.log('\n---------- flatMap() ----------')

const array2 = [1, 2, 3, 4, 5, 6, 7]

console.log(array2.flatMap(value => `${value} * 2 = ${value * 2}`))

// trim-> End, Start -> elimina espacios al inicio/final
console.log('\n---------- trim() ----------')

let hello = '                 hello world'
console.log(hello)
console.log('Using trimStart: ', hello.trimStart())

hello = 'hello world                    '
console.log(hello)
console.log('Using trimEnd: ', hello.trimEnd())

// Optional cash binding -> permite pasar de forma opcional el parametro de error al alor de catch
console.log('\n---------- catch (within parameter error) ----------')

// try {
//   // some code
// } catch {
//   error
// }

// fromEntries -> permite transformar clave, valor a objeto -> arreglos a objetos
console.log('\n---------- fromEntries() ----------')

// un arreglo convertio en objeto
let entries = [['name', 'Tavo'], ['age', 25], ['country', 'MX']]
console.log(Object.fromEntries(entries))

// Un objeto convertido en arreglo, accediendo a su posicion 0
const obj = {
  name: 'Tavo',
  age: 25,
  country: 'MX'
}
console.log(Object.entries(obj)[0])

// Symbol(): Objeto de tipo simbolo -> para acceder a una descripción de un objeto tipo simbolo
console.log('\n---------- Symbol() ----------')

let mySymol = ['my simbol', 1, 2]
let symbol = Symbol(mySymol)

console.log('descripcion de un objeto simbolo: ', symbol.description)
