import db from "./db.js"

//===Usuarios

const USUARIOS_SCHEMA = `
    CRETE TABLE IF NOT EXIST "USUARIOS"(
        "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
        "NOME" varchar(64)
        "EMAIL" varchar(64)
        "SENHA" varchar(64)
    );`;

const ADD_USUARIOS_DATA = `
    INSERT INTO USUARIOS (ID, NOME, EMAIL, SENHA) 
    VALUES
    (1, 'Egenio Oliveira', 'eugenio.oli@gol.com.br','162534')
    (2, 'Olivia Ribeiro', 'ribeiro.olivia@gmail.com','984534')
    (3, 'Mirtes Faria', 'mirtes.faria@yahoo.com','895624')
    `

 function criaTabelaUser(){
     db.run(USUARIOS_SCHEMA, (error) =>{
         if (error) console.log("Erro ao criar tabela de usuarios");
     });
 }

function populaTabelaUser(){
    db.run(ADD_USUARIOS_DATA, (error) =>{
        if (error) console.log("Erro ao popular tabela de usuarios");
    });
}
 
const TAREFA_SCHEMA = `
    CRETE TABLE IF NOT EXIST TAREFAS(
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        TITULO VARCHAR(64),
        DESCRICAO TEXT,
        STATUS VARCHAR(32),
        DATACRIACAO VARCHAR(32)
        ID USUARIO INTEGER,
        FOREGIN KEY (ID_USUARIO) REFERENCES USUARIOS(ID)
    );`;

    const ADD_TAREFAS_DATA = `
    INSERT INTO USUARIOS (TITULO, DESCRICAO, STATUS, ID_USUARIO) 
    VALUES
    ('Yoga', 'Fazer yoga segunda e quarta','continuo', '2021-01-10'. 2),
    ('Estudar', 'Sqlite seg e ter','TODO', '2021-01-09'. 1),
    ('Dentista', 'Consulta com Dra. Andreia','continuo', '2021-01-10'. 2)
    `

function criaTabelaTarefas(){
        db.run(Tarefas_SCHEMA, (error) =>{
            if (error) console.log("Erro ao criar tabela de tarefas");
        });
    }
   
function populaTabelaTarefas(){
       db.run(ADD_TAREFAS_DATA, (error) =>{
           if (error) console.log("Erro ao popular tabela de tarefas");
       });
   }
    

 

db.serialize(()=>{
    criaTabelaUser();
    populaTabelaUser();
    criaTabelaTarefas();
    populaTabelaTarefas();
});