interface Humano {
  nome: string,
  idade: number
}

function saudarComOla(pessoa: Humano) {
  console.log('Olá, '+ pessoa.nome )
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = 'Joana'
}

const pessoa = {
  nome: 'João',
  idade: 25
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)