interface Humano {
  nome: string
  idade?: number
  [prop: string]: any
  saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, '+ pessoa.nome )
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana'
}

const pessoa: Humano = {
  nome: 'João',
  idade: 25,
  saudar(sobrenome: string) {
    console.log('Olá, meu nome é: '+ this.nome + ' ' + sobrenome)
  }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
// saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 })

pessoa.saudar('Skywalker')

class Cliente implements Humano {
  nome: string = ''
  ultimaCompra: Date = new Date

  saudar(sobrenome: string) {
    console.log('Olá, meu nome é: ', this.nome + ' ' + sobrenome)
  }
}

const meuCliente = new Cliente

meuCliente.nome = 'Yuri'
meuCliente.saudar('Boyka')
console.log(meuCliente.ultimaCompra)

interface FuncaoCalculo {
  (a: number, b:number ): number
}


let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
  return base ** exp
}

console.log(potencia(2, 2))

interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

interface Object {
  log(): void
}

Object.prototype.log = function() {
  console.log(this.toString())
}

const x = 2;

x.log()