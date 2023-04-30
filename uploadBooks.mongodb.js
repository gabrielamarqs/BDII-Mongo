// conecta ao banco de dados db_books
use('db_books'); //(1)

// salva numa variavel a coleção books
let book = db.getCollection('books'); // (2)
// importa api do Nodejs para ler arquivos:
const fs = require('fs');
let rawdata = fs.readFileSync('books3.json');
// converte o conteudo do arquivo para um objeto javascript (data):

let data = JSON.parse(rawdata);
console.log('Total docs carregados do arquivo: ' + data.length); // mostra o total de documentos carregados

//console.log('Inserindo Documentos no cloud atlas...');
//book.insertMany(data);
// esse comando insere

console.log('Total Documentos inseridos: ' + book.countDocuments() + ' livros.');