function echo(objeto: any) {
  return objeto
}

console.log(echo('joão'))

// Usando generics

function echoMelhorado<T>(objeto: T): T {
  return objeto
}

console.log(echoMelhorado('joão'))
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27}))

// Generics disponiveis na API

const avaliacoes: Array<number> = [10, 9, 9.3, 7.7]

avaliacoes.push(8.5)

console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
  args.forEach(elemento => console.log(elemento))
}

imprimir([10,20,30,40])
imprimir<number>([10,20,30,40])
imprimir<string>(['Carlos','Bia','Number'])
imprimir<{ nome: string, idade: number}>([
  { nome:'Carlos', idade: 17 },
  { nome: 'Bia', idade: 28}
])

// Tipo Genérics
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoMelhorado

console.log(chamarEcho<string>('Alguma coisa'))

// Class com generics
abstract class OperacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
// console.log(new OperacaoBinaria(1, 2).executar())
// console.log(new OperacaoBinaria({}, {}).executar())

class SomaBinaria extends OperacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2
  }
}

console.log(new SomaBinaria(3,4).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { dia, mes, ano } = data
    return new Date(`${mes}/${dia}/${ano}`).getTime()
  }

  executar(): string {
    const t1 = this.getTime(this.operando1)
    const t2 = this.getTime(this.operando2)
    const diferenca = Math.abs(t1 - t2)
    const dia = 1000 * 60 * 60 * 24
    return `${Math.ceil(diferenca / dia)} dia(s)`
  }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(5, 2, 2020)
console.log(new DiferencaEntreDatas(d1, d2).executar())

// Challenge

class Fila<T extends number> {
  private fila: Array<T>

  constructor(...args: T[]) {
    this.fila = args
  }

  entrar(elemento: T) {
    this.fila.push(elemento)
  }

  proximo(): T | null{
    if(this.fila.length >= 0 && this.fila[0]) {
      const primeiro = this.fila[0]
      this.fila.splice(0, 1)
      return primeiro
    }else {
      return null
    }
  }

  imprimir() {
    console.log(this.fila)
  }
}

const fila = new Fila<number>(1,2 ,3 ,4)
fila.entrar(4)
fila.imprimir()
fila.proximo()
fila.imprimir()
fila.proximo()
fila.proximo()
fila.proximo()
fila.proximo()
fila.imprimir()
