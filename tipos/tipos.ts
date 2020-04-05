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

// function

function returnMyName(): string {
  return myName;
}

console.log(returnMyName())

function hello(): void {
  console.log('Hello')
}

hello()

function sum(numA: number, numB: number): number {
  return numA+numB;
}

console.log(sum(10,10))

// type function

let calc: (numA: number, numB: number) => number
calc = sum
console.log(calc(23, 10))

// object

let user: { name: string, age: number } = {
  name: 'John',
  age: 27
}

console.log(user)

// challenge

let func: { names: string[], hour: (h: number) => string } = {
  names: ['John', 'Bryan'],
  hour(h: number): string {
    if(h <= 8) {
      return 'Ponto normal';
    }
    else {
      return 'Fora do horário'
    }
  }
}

console.log(func.names)
console.log(func.hour(8))

// Type (alias)

type Funcionario = {
  names: string[],
  hour: (h:number) => string
}

let func2: Funcionario = {
  names: ['Ana', 'Bia'],
  hour(h: number): string {
    if(h <= 8) {
      return 'Ponto normal';
    }
    else {
      return 'Fora do horário'
    }
  }
}

console.log(func2.names)
console.log(func2.hour(14))

// Union Types

let nota: number | string = 10

console.log(`Minha nota é ${nota}!`)

nota = '10'

console.log(`Minha nota é ${nota}!`)

// type never

function failed(msg: string): never {
  throw new Error(msg)
}

const product = {
  name: 'Apple',
  price: -1,
  validateProduct() {
    if(!this.name || this.name.trim().length == 0 ) {
      failed('Precisa ter um name!')
    }

    if(this.price < 0) {
      failed('Preço invalido!')
    }
  }
}

// product.validateProduct()

let altura = 12


let alturaOpcional: null | number = 12  
alturaOpcional = null

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null;
}

const contato: Contato = {
  nome: 'Fulano',
  tel1: '12312312',
  tel2: null
}

console.log(contato)

let podeSerNulo: null = null

console.log(podeSerNulo)

// challenge

type Conta = {
  saldo: number,
  depositar: (valor: number) => void 
}

let contaBancaria: Conta = {
  saldo: 3456,
  depositar(valor: number) {
      this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: Conta,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)