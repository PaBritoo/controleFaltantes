const express = require ("express");
const app = express();
const handlebars = require ("express-handlebars");
const bodyParser = require ("body-parser");
const Cadastro = require ("./models/Cadastro")

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//rotas
//pode-se definir uma rota entre o >''< que ficara no endereço da página
app.get('/', function(req, res){
    res.render ('cad-faltantes');
});


app.post('/add-faltantes', function (req, res){
    Cadastro.create ({
        linha: req.body.linha,
        chassi: req.body.chassi,
        peca: req.body.chassi,
        quantidade: req.body.quantidade,
        descricao: req.body.descricao
    }).then(function(){
        res.redirect('/')

        //para imprimir na tela >res.send("Cadastro de faltante realizado com sucesso!")
    }).catch(function(err){
        res.send("Houve um erro: " + erro)
    })
})

    //para inprimir na tela >> res.send("Linha: " + req.body.linha + "<br><br>Chassi: " + req.body.chassi)


app.listen(5441);

















/*const express = require("express");

const app = express();

const Sequelize = require('sequelize');
const sequelize = new Sequelize ('lancamentos','root','pablo280490',{
host: 'localhost',
dialect: 'mariadb'
});

sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso: LocalHost5441');
}).catch(function(err){
    console.log('Erro ao se conectar!' + err);

}); */