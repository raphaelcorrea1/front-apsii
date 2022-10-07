import { produtoService } from "./produto-service.js";

const createNewLine = (id, descricao_produto, quantidade_estoque, valor_produto, validade_produto) => {
    let newLineProduto = document.createElement('tr');
    let content = `
                <tr>
                   <td>${id}</td>
                   <td>${descricao_produto}</td>
                   <td>${quantidade_estoque}</td>
                   <td>${valor_produto}</td>
                   <td>${validade_produto}</td>
               </tr>`;
    newLineProduto.innerHTML = content;
    return newLineProduto;
};

const table = document.querySelector('[data-table]');

const btnRelatorio = document.querySelector('[btn-relatorio]');

btnRelatorio.addEventListener('click', () => {
    produtoService.listProdutos()
    .then(data => {
    data.forEach(element => {
    table.appendChild(createNewLine(element.id, element.descricao_produto, element.quantidade_estoque, element.valor_produto, element.validade_produto))
    })
})
});


