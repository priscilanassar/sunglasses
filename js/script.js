function comprar(nomeProduto, preco) {
    console.log("Produto: ", nomeProduto);
    console.log("Preço: ", preco);
    oculos(
        oculos = Produto
    )
    alert(
        "você selecionou: " + nomeProduto + "Preço: R$" + preco
    )
}

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    let estilo = document.querySelector(
        'input[name="estilo"]:checked'
    ).value

    let cliente = {
        nome: nome,
        email: email,
        telefone: telefone,
        idade: idade,
        numeracao: numeracao,
        cor: cor,
        estilo: estilo,
        mensagem: mensagem
    }

    console.log(number)
    console.log(regiao)
    console.log(nome)
    console.log(email)
    console.log(telefone)
    console.log(cliente)

}

function calcularFrete() {
    let number = document.getElementById("ValorCompra").value;
    let regiao = document.getElementById("regiao").value;

    number = parseFloat(number);

    let frete;

    if (number >= 299) {
        frete = 0;
    }

    else if (regiao == "sudeste") {
        frete = 19.90;
    }

    else if (regiao == "sul") {
        frete = 24.00;
    }

    else if (regiao == "nordeste") {
        frete = 24.00;
    }

    else if (regiao == "centrooeste") {
        frete = 24.00;
    }

    console.log(frete)

    document.getElementById("resultadoFrete").textContent = " Frete: R$ " + frete.toFixed(2);


}

