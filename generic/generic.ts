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
class OperacaoBinaria {
  constructor(public operando1: any, public operando2: any) {}

  executar() {
    return this.operando1 + this.operando2
  }
}

console.log(new OperacaoBinaria('Bom ', 'dia').executar())
console.log(new OperacaoBinaria(1, 2).executar())
console.log(new OperacaoBinaria({}, {}).executar())