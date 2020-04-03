let myName: string = 'John'

console.log(myName)

let age: number =  27

console.log(age)

let myAge: any
myAge = 27
console.log(typeof myAge)
myAge = 'idade é 27'
console.log(typeof myAge)

// arrays

let arrayNames: string[] = ['John', 'Daniel', 'Lori']

console.table(arrayNames)

// tuplas

let address: [string, number, string] = ['Av principal', 99, 'Guarulhos']
console.table(address)

// enums

enum Color {
  Gray,
  Green,
  Yellow
}

let myColor: Color = Color.Green
console.log(myColor)

// any

let car: any = 'BMW'
console.log(car)

car = { name: 'BMW', year: '2019'}
console.log(car)