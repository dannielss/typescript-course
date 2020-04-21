function logarClasse(construtor: Function) {
  console.log(construtor)
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio
}

function decorator(a: string, b: number) {
  return function(_: Function): void {
    console.log(a + ' ' + b)
  }
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
  console.log('Carregado')
  return class extends construtor {
    constructor(...args: any[]) {
      console.log('Antes...')
      super(...args)
      console.log('Depois...')
    }
  }
}

// new Eletrodomestico()
// new Eletrodomestico()
// new Eletrodomestico()

// @logarClasse
// @logarClasseSe(true)
// @decorator('Oi', 123)
// @logarObjeto
@imprimivel
class Eletrodomestico {
  constructor() {
    console.log('novo...')
  }
}

interface Eletrodomestico {
  imprimir?(): void
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function() {
    console.log(this)
  }
}

const eletro = new Eletrodomestico()

eletro.imprimir && eletro.imprimir()