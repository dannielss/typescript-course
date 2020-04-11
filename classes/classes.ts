class Data {
  dia: number
  mes: number
  ano: number

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const aniversario = new Data(3);
console.table(aniversario)

class DataEsperta {
  constructor(public dia: number = 1,public mes: number = 1,public ano: number = 1970) {}
}

const aniversarioEsperto = new DataEsperta(3, 3, 2000);
console.table(aniversarioEsperto)

// challenge

class Produto {
  constructor(public nome: string, public preco: number, public desconto: number = 0) {}

  public resumo(): string {
    return `${this.nome} custa R$ ${this.metodoComDesconto()} (${this.desconto > 0 ? this.desconto * 100+'% off' : 'Não possui desconto'})`;
  } 

  public metodoComDesconto(): number {
    return this.preco * (1 - this.desconto);
  } 
}

const produto1 = new Produto('Arroz', 16)
console.log(produto1)

const produto2 = new Produto('Celular', 1600, 0.2)
console.log(produto2)

console.log(produto1.resumo())
console.log(produto2.resumo())

class Pessoa {
  private _idade: number = 0

  get idade(): number {
    return this._idade
  }

  set idade(valor: number) {
    if(valor >= 0 && valor <= 120) {
      this._idade = valor
    }
  } 
}

const pessoa1 = new Pessoa

pessoa1.idade = 10
console.log(pessoa1)

pessoa1.idade = -3
console.log(pessoa1)

class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return this.PI * raio * raio
  }
}

// const m1 = new Matematica

// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4))