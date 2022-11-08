const user = {
    nome: "Jelson",
    email: "j@j.com",
    nascimento:"2004/07/07",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email);
    }
}

const admin = {
    nome: "Jordan",
    email: "j@jor.com",
    nascimento:"2000/01/01",
    role: "admin",
    ativo: true,
    criarCurso: function() {
        console.log('curso criado!');
    }
}

Object.setPrototypeOf(admin, user);
console.log(Object.prototype)