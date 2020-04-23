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
@logarObjeto
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

class ContaCorrente {
  @naoNegativo
  private saldo: number

  constructor(saldo: number) {
    this.saldo = saldo
  }

  @congelar
  sacar(@paramInfo valor: number) {
    if(valor <= this.saldo) {
      this.saldo -= valor
      return true
    }else {
      return false
    }
  }

  @congelar
  getSaldo() {
    return this.saldo
  }
}

const cc = new ContaCorrente(10000)
cc.sacar(5000)
cc.sacar(5000)
console.log(cc.getSaldo())

// cc.getSaldo = function() {
//   return this['saldo'] + 7000
// }

// console.log(cc.getSaldo())

function congelar(alvo: any, nomePropriedade: string, descritor: PropertyDescriptor) {
  console.log('Alvo', alvo)
  console.log('Nome', nomePropriedade)
  descritor.writable = false
}

function naoNegativo(alvo: any, nomePropriedade: string) {
  delete alvo[nomePropriedade]
  Object.defineProperty(alvo, nomePropriedade, {
    get: function(): any {
      return alvo['_' + nomePropriedade]
    },
    set: function(valor: any): void {
      if(valor < 0) {
        throw new Error('Salvo Inválido!')
      }else {
        alvo['_'+ nomePropriedade] = valor
      }
    }
  })
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo ${alvo}`)
  console.log(`Método ${nomeMetodo}`)
  console.log(`Índice ${indiceParam}`)
}