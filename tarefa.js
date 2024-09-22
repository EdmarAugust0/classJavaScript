class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);    
    }

    trabalhar () {
        console.log("Trabalhando...");
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`Sou gerente do departamento ${this.departamento}`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`Estou codando em ${this.linguagem}`);
    }
}

console.log("**Criação do gerente**");
var g1 = new Gerente("Ana Beatriz", 19, "Gerente", "TI");
g1.seApresentar();
g1.trabalhar();
g1.gerenciar();

console.log("\n**Criação do desenvolvedor**");
var d1 = new Desenvolvedor("Edmar Augusto", 21, "Desenvolvedor FullStack", "JavaScript");
d1.seApresentar();
d1.programar();
