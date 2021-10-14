const db = require ('./db')

//criar tabela no banco de dados conforme necessidade
const Cadastro = db.sequelize.define('cadastro', {
    linha: {
       type: db.Sequelize.STRING
   },
    chassi: {
       type: db.Sequelize.TEXT
   },
    peca: {
    type: db.Sequelize.STRING
   },
    quantidade: {
    type: db.Sequelize.STRING
   },
   descricao: {
    type: db.Sequelize.STRING
   }
})

//Cadastro.sync({force: true})

module.exports = Cadastro
