//importando o bd.js para poder utiliza o banco de dados simulado
//import { dbUsuarios } from "../db.js";

class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/', usuarioController.listar)
        app.get('/email/:email', usuarioController.buscarPorEmail)
        app.post('/', usuarioController.inserir)
        app.delete('/email/:email', usuarioController.delete)
        app.put('/email/:email', usuarioController.atualizacao)
    }

    static listar(req, res){
        const usuario = dbUsuarios
        //devolve a lista de usuario
        res.send(usuario)
    
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }
    static buscarPorEmail(req, res){
        //buscar o email na lista de usuarios
        const usuario = dbUsuarios.find(usuario => usuario.email === req.params.email)
        //se o usuario não for encontrado, devolve um ero
       if(!usuario){
           res.status(404).send('Usuario não encontrado')
       }
       //se o usuario for encontrad, devolve o usuario
       res.send(usuario)
    }

    static delete (req,res){
        //busca o email na lista de usuarios
        const usuario = dbUsuarios.find(usuario=> usuario.email === req.params.email)
    //se o usuario não for encontrado, devolve um erro
    if(!usuario){
        res.status(404).send('Usuario não encontrado')
    }
    //se o usuario for encontrado, deleta o usuario
    const index = dbUsuarios.indexOf(usuario)
    dbUsuarios.splice(index, 1)
    //devolve o usuario deletado
    res.send(usuario)
    }

    static atualizacao(req,res){
        //busca o email na lista de usuario
        const usuario = dbUsuarios.find(usuario => usuario.email === req.params.email)
        //se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuario não encontrado')
        }
        //se o usuario for encontrado, atualiza o usuario
        usuario.nome = (req.body.nome || usuario.nome)
        usuario.email = (req.body.email || usuario.email)
        usuario.senha = (req.body.senha || usuario.senha)
    //devolve o usuario atualizado
    res.send({mensagem: 'Usuario alterado com sucesso'})

    }
}

    

export default usuarioController