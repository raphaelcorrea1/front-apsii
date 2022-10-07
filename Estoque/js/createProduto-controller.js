import { produtoService } from "./produto-service.js";

const form = document.querySelector('[data-form]');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const codBarras = event.target.querySelector('[data-codBarras]').value;
    const descricao_produto = event.target.querySelector('[data-descricao_produto]').value;
    const quantidade_produto = event.target.querySelector('[data-quantidade_produto]').value;
    const valor_produto = event.target.querySelector('[data-valor_produto]').value;
    const validade_produto = event.target.querySelector('[data-dtValidade_produto]').value;
    var categoriaI = document.querySelector("#categoria");
    var categoria =  document.querySelector("#categoria").options[categoriaI.selectedIndex].text; 
    if(categoria == "Selecionar") {
        categoria = null;
    }
    const categoria_produto = categoria;

    produtoService.createProduto(codBarras, descricao_produto, valor_produto, quantidade_produto, validade_produto)

})