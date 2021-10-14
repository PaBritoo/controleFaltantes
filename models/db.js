const Sequelize = require ('sequelize');

const sequelize = new Sequelize ('lancamentos','root', 'pablo280490', {
    host: 'localhost',
    dialect: 'mariadb'
})

module.exports= {
    Sequelize: Sequelize,
    sequelize: sequelize
};



/*sequelize.authenticate()
    .then(function(){
    console.log("Conexão com Banco de Dados com sucesso!")
    }).catch(function(erro){
    console.log("Erro: Faltante não cadastrado!" + erro)
    })*/


/*codigo utilizado para criar tabela no banco de dados
const Cadastro = sequelize.define('cadastro', {
    linha: {
        type: Sequelize.STRING
    },
    chassi: {
        type: Sequelize.STRING
    },
    peca: {
        type: Sequelize.STRING
    },
    quantidade: {
        type: Sequelize.STRING
    },
    descricao: {
        type: Sequelize.STRING
    }
    })

Cadastro.sync({force: true})*/



