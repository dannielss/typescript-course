let canal: string = 'Gaveta'
let inscritos: number = 6102352

console.log(`Canal = ${canal}`)

function soma(a: any, b: any) {
  return a + b
}

let qualquerCoisa

qualquerCoisa = 12
qualquerCoisa = 'abc'

function saudar(isManha: boolean): string {
  let saudacao: string
  if(isManha) {
    saudacao = 'Bom dia'
  }else {
    saudacao = 'Boa vida a'
  }

  return saudacao
}