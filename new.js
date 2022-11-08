function User(nome, email) {
    this.nome = nome;
    this.email= email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`;
    }
}

const novoUser = new User('Jelson', 'j@j.com');
console.log(novoUser.exibirInfos());

function Admin(role) {
    User.call(this, 'Jelson', 'j@j.com');
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype);
const outroUser = new Admin('admin');

console.log(outroUser.exibirInfos());
console.log(outroUser.role);
