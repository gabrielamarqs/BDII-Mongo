use("db_books");

let book = db.getCollection("books");

// // 1) Livros com mais de 1092 (paginas)
// let res1 = book.find(
//     //filtros - condições
//     { "pageCount" : { $gt : 1092 } },
//     { "title" : 1, "pageCount" : 1, "_id" : 0 },
// )

// // transforma num vetor
// console.log('Os livros que possuem mais de 1092 páginas são: ' + JSON.stringify(res1.toArray(), null, 2) + '\n');

// // 2) Listar todas as categorias existentes
// let res2 = book.distinct("categories");
// console.log('As categorias de livros encontradas são: ' + JSON.stringify(res2, null, 2) + '\n');
// // esse não precisa de toArray porque o distinct ja retorna um array

// // 3) Listar os tipos de status
// let res3 = book.distinct("status");
// console.log('Os tipos de status são: ' + JSON.stringify(res3, null, 2) + '\n');

// // 4) Listar os 5 livros com o maior número de páginas:
// let res4 = book.find(
//     {}, // o primeiro objeto é o filtro
//     { "title" : 1, "_id" : 0 }, // o segundo é o que quero que mostre
// ).sort(
//     { "pageCount" : -1 },
// ).limit(5);
// console.log('Os 5 livros com maior número de páginas são:' + JSON.stringify(res4.toArray(), null, 2) + '\n');

// // 5) Encontrar livros sobre COBOL
// let res5 = book.find(
//     { "longDescription" : { $regex : /cobol/i } },
//     { "title" : 1, "_id" : 0 },
// );
// console.log('Livros sobre COBOL:' + JSON.stringify(res5.toArray(), null, 2) + '\n');

// // 6) Livros que contém no título a palavra "Development" com data de publicação a partir de 2000:
// let res6 = book.find(
//     { $and : [
//         { "title" : { $regex : /development/i } }, 
//         { "publishedDate.$date" : 
//             { $gt:'2000-01-01T00:00:00Z' } 
//         }
//     ] },
//     { "title" : 1, "_id" : 0, "publishedDate" : 1 },
// )
// console.log('Livros que contém no título a palavra "Development" e foram publicados depois de 2000: ' + JSON.stringify(res6.toArray(), null, 2) + '\n');

// // 7) Livros publicados anteriores a 1995
// let res7 = book.find(
//     { "publishedDate.$date" : 
//         { $lt:'1995-01-01T00:00:00Z' } 
//     },
//     { "title" : 1, "_id" : 0, "publishedDate" : 1 },
// );
// console.log('Livros que foram publicados antes de 1995: ' + JSON.stringify(res7.toArray(), null, 2) + '\n');

// 8) Total de livros publicados no ano 2000
let res8 = book.find( {
    "publishedDate.$date" : {
            $gt : '2000-01-01T00:00:00Z',
            $lt : '2001-01-01T00:00:00Z'
        } 
    } , {
        "title" : 1, "_id" : 0, "publishedDate" : 1
    }
).count();
console.log('Quantidade de livros que foram publicados no ano 2000: ' + JSON.stringify(res8, null, 2) + '\n');
//{ categories : {$regex : /xml/i} }



