"use strict";
var myName = 'John';
console.log(myName);
var age = 27;
console.log(age);
var myAge;
myAge = 27;
console.log(typeof myAge);
myAge = 'idade é 27';
console.log(typeof myAge);
// arrays
var arrayNames = ['John', 'Daniel', 'Lori'];
console.table(arrayNames);
// tuplas
var address = ['Av principal', 99, 'Guarulhos'];
console.table(address);
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = 'BMW';
console.log(car);
car = { name: 'BMW', year: '2019' };
console.log(car);
// function
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function hello() {
    console.log('Hello');
}
hello();
function sum(numA, numB) {
    return numA + numB;
}
console.log(sum(10, 10));
// type function
var calc;
calc = sum;
console.log(calc(23, 10));
// object
var user = {
    name: 'John',
    age: 27
};
console.log(user);
// challenge
var func = {
    names: ['John', 'Bryan'],
    hour: function (h) {
        if (h <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(func.names);
console.log(func.hour(8));
var func2 = {
    names: ['Ana', 'Bia'],
    hour: function (h) {
        if (h <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(func2.names);
console.log(func2.hour(14));
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
// type never
function failed(msg) {
    throw new Error(msg);
}
var product = {
    name: 'Apple',
    price: -1,
    validateProduct: function () {
        if (!this.name || this.name.trim().length == 0) {
            failed('Precisa ter um name!');
        }
        if (this.price < 0) {
            failed('Preço invalido!');
        }
    }
};
// product.validateProduct()
var altura = 12;
var alturaOpcional = 12;
alturaOpcional = null;
var contato = {
    nome: 'Fulano',
    tel1: '12312312',
    tel2: null
};
console.log(contato);
var podeSerNulo = null;
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map