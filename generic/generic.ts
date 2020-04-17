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