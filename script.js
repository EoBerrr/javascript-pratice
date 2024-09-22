class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }
    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }
    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

function exibirErro(mensagem) {
    const erroElement = document.getElementById('resultado');
    erroElement.textContent = mensagem;
}

function criarFuncionario() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;

    try {
    if (!/^[a-zA-Z\s]+$/.test(nome)) {
        throw new Error('O nome deve conter apenas letras.');
    }

    if (isNaN(idade) || idade <= 0) {
    throw new Error('A idade deve ser um número positivo.');
    }

    if (!nome || !idade || !cargo) {
    throw new Error('Todos os campos são obrigatórios.');
    }

    if (cargo === 'Gerente') {
    const gerente = new Gerente(nome, idade, cargo, departamento);
    gerente.seApresentar();
    gerente.gerenciar();
    } else if (cargo === 'Desenvolvedor') {
    const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
    desenvolvedor.seApresentar();
    desenvolvedor.programar();
    }
    } catch (error) {
      exibirErro(error.message);
    }
}