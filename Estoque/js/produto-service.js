const listProdutos = () => {
    return fetch(`http://54.94.11.167:3000/estoque/getProdutos`)
    .then(response => {
        return response.json();
    })
}

const createProduto = (codBarras, descricao_produto, quantidade_produto, valor_produto, validade_produto) => {

    return fetch(`http://54.94.11.167:3000/estoque/createProduto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials' : 'true'
        },
        body: JSON.stringify({
            "id": codBarras,
            "descricao_produto": descricao_produto,
            "quantidade_estoque": quantidade_produto,
            "valor_produto": valor_produto,
            "validade_produto": validade_produto
        })
    })
    .then (response => {
        return response.body;
    })
}


export const produtoService = {
    listProdutos, 
    createProduto
}


















// let url = "http://localhost:3000/estoque/getProdutos";
// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
// let div = document.querySelector("tbody");
// let produtos = data;
// console.log(produtos)
// console.log(produtos[0].id)
// produtos.forEach(function(produto){
// div.innerHTML += `<tr>
//                     <td>${produto.id}</td>
//                     <td>${produto.descricao_produto}</td>
//                     <td>${produto.quantidade_estoque}</td>
//                     <td>${produto.valor_produto}</td>
//                     <td>${produto.validade_produto}</td>
//                 </tr>`;
// });
// })
// .catch(function(error) {
// console.log(error);
// });


