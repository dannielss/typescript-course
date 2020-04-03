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
console.log(address)