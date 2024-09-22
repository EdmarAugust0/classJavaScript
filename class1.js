class Dispositivo {
    constructor(nome) {
        this.nome = nome;
    }
}

class SmartPhone extends Dispositivo {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
    
}

var a15 = new SmartPhone("IPhone 15", "Dourado", "15")

console.log(a15);