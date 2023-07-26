var ids = []
var nomes = []
var precos = []
var avaliacoes = []

var carrinho = []
var quantidade = []

desejaExecutar()

function desejaExecutar(){
    let clienteOuAdm = prompt("Você deseja entrar como cliente ou vendedor? \n 1 - Cliente \n 2 - Vendedor")
    if (clienteOuAdm == '1' ){
        acoesCliente()
    } else if(clienteOuAdm == '2') {
        acoesVendedor()
    }
}

function acoesCliente(){
    let acaoParaExecutar = prompt("Digite uma ação \n 1 - Adicionar Produto No Carrinho \n 2 - Excluir produto do carrinho \n 3 - Ver valor total do carrinho \n 4 - Exibir carrinho \n 5 - Cancelar operação \n 6 - Voltar")
    if (acaoParaExecutar == '1') {
        let nomeProduto = prompt("Digite o nome do produto que deseja adicionar ao carrinho")
        let quantidade = parseInt(prompt("Digite a quantidade de " + nomeProduto + ' que você deseja comprar'))
        adicionarProdutoCarrinho(nomeProduto, quantidade)
    } else if (acaoParaExecutar == '2') {
        let nomeProduto = prompt("Digite o nome do produto que deseja remover do carrinho")
        let quantidade = parseInt(prompt("Digite a quantidade de " + nomeProduto + ' que você deseja remover'))
        removerProdutoCarrinho(nomeProduto, quantidade)
    } else if (acaoParaExecutar == '3') {
        retornarValorCarrinho()
    } else if (acaoParaExecutar == '4') {
        exibirCarrinho()
    } else if (acaoParaExecutar == '5') {
        console.log('Painel fechado com suceso')
    } else if (acaoParaExecutar == '6') {
        desejaExecutar()
    }
    if (acaoParaExecutar != '5' && acaoParaExecutar != '6') {
        acoesCliente()
    }
}

function acoesVendedor(){
    let acaoParaExecutar = prompt("Digite uma ação \n 1 - Cadastrar Produto \n 2 - Buscar Produto Por ID \n 3 - Buscar ID pelo Nome \n 4 - Ordenar por ID \n 5 - Ordenar por avaliação \n 6 - Atualizar preço \n 7 - Deletar Produto \n 8 - Cancelar Operação \n 9 - Voltar")
    if (acaoParaExecutar == '1') {
        let nomeProduto = prompt("Digite o nome do produto que deseja cadastrar")
        let precoProduto = parseInt(prompt("Digite o valor do produto"))
        let avaliacaoProduto = parseInt(prompt("Digite a avaliação inicial do produto"))
        cadastrarProduto(nomeProduto, precoProduto, avaliacaoProduto)
    } else if (acaoParaExecutar == '2'){
        let idProduto = prompt("Digite o ID do produto que deseja buscar")
        pegarProdutoPeloId(idProduto)
    } else if (acaoParaExecutar == '3'){
        let nomeProduto = prompt("Digite o nome do produto que deseja buscar")
        pegarProdutoPeloNome(nomeProduto)
    } else if (acaoParaExecutar == '4'){
        exibirProdutos('id')
    } else if (acaoParaExecutar == '5') {
        exibirProdutos('avaliacoes')
    } else if (acaoParaExecutar == '6') {
        let idProduto = prompt("Digite o ID do produto que deseja atualizar")
        let precoProduto = parseInt(prompt("Digite o novo valor do produto"))
        atualizarPreco(idProduto, precoProduto)
    } else if (acaoParaExecutar == '7') {
        let idProduto = prompt("Digite o ID do produto que deseja deletar")
        deletarProduto(idProduto)
    } else if (acaoParaExecutar == '8') {
        console.log('Operação cancelada com sucesso')
    } else if (acaoParaExecutar == '9') {
        desejaExecutar()
    }
    if (acaoParaExecutar != '8' && acaoParaExecutar != '9') {
        acoesVendedor()
    }
}

function cadastrarProduto(nome, preco, avaliacao){
    let idDisponivel = ids.length
    ids[idDisponivel] = idDisponivel + 1
    nomes[idDisponivel] = nome 
    precos[idDisponivel] = preco
    avaliacoes[idDisponivel] = avaliacao
    exibirProdutos()
}

function pegarProdutoPeloId(id){
    for (let index = 0; index < ids.length; index++) {
        if (ids[index] == id) {
            console.log(id, nomes[index], precos[index], avaliacoes[index])
            return index
        }
    }
}

function pegarProdutoPeloNome(nome){
    for (let index = 0; index < nomes.length; index++) {
        if (nomes[index] == nome){
            console.log(ids[index])
            return index
        }
    }
}

function atualizarPreco(idProduto, novoValor){
    let indexProduto = pegarProdutoPeloId(idProduto)
    precos[indexProduto] = novoValor
}

function deletarProduto(idProduto){
    let indexProduto = pegarProdutoPeloId(idProduto)
    let novosIds = []
    let novosNomes = []
    let novosPrecos = []
    let novasAvaliacoes = [] 
    for (let index = 0; index < ids.length; index++) {
        if (index != indexProduto) {
            novosIds[novosIds.length] = ids[index]
            novosNomes[novosNomes.length] = nomes[index]
            novosPrecos[novosPrecos.length] = precos[index]
            novasAvaliacoes[novasAvaliacoes.length] = avaliacoes[index]
        }
    }
    ids = novosIds
    nomes = novosNomes
    precos = novosPrecos
    avaliacoes = novasAvaliacoes
    console.log('Produto ' + idProduto + ' deletado com sucesso')
}

function exibirProdutos(order){
    if (order == 'avaliacoes') {
        for (let index = 0; index < avaliacoes.length; index++) {
            for (let indexAvaliacoes = 0; indexAvaliacoes < avaliacoes.length; indexAvaliacoes++) {
                if (avaliacoes[indexAvaliacoes] < avaliacoes[indexAvaliacoes + 1]) {
                    let avaliacaoAntiga = avaliacoes[indexAvaliacoes]
                    avaliacoes[indexAvaliacoes] = avaliacoes[indexAvaliacoes + 1]
                    avaliacoes[indexAvaliacoes + 1] = avaliacaoAntiga

                    let nomeAntigo = nomes[indexAvaliacoes]
                    nomes[indexAvaliacoes] = nomes[indexAvaliacoes + 1]
                    nomes[indexAvaliacoes + 1] = nomeAntigo

                    let precoAntigo = precos[indexAvaliacoes]
                    precos[indexAvaliacoes] = precos[indexAvaliacoes + 1]
                    precos[indexAvaliacoes + 1] = precoAntigo

                    let idAntigo = ids[indexAvaliacoes]
                    ids[indexAvaliacoes] = ids[indexAvaliacoes + 1]
                    ids[indexAvaliacoes + 1] = idAntigo
                }
            }            
        }
    } else if (order == 'id') {
        for (let index = 0; index < ids.length; index++) {
            for (let indexIds = 0; indexIds < ids.length; indexIds++) {
                if (ids[indexIds] > ids[indexIds + 1]) {
                    let avaliacaoAntiga = avaliacoes[indexIds]
                    avaliacoes[indexIds] = avaliacoes[indexIds + 1]
                    avaliacoes[indexIds + 1] = avaliacaoAntiga

                    let nomeAntigo = nomes[indexIds]
                    nomes[indexIds] = nomes[indexIds + 1]
                    nomes[indexIds + 1] = nomeAntigo

                    let precoAntigo = precos[indexIds]
                    precos[indexIds] = precos[indexIds + 1]
                    precos[indexIds + 1] = precoAntigo

                    let idAntigo = ids[indexIds]
                    ids[indexIds] = ids[indexIds + 1]
                    ids[indexIds + 1] = idAntigo
                }
            } 
        }
    }
    console.log("Produtos cadastrados:", ids, nomes, precos, avaliacoes)
}



function adicionarProdutoCarrinho(nomeDoProduto, quantidadeProduto){
    let produtoExiste = false
    let produtoEncontrado = false
    for (let indice = 0; indice < nomes.length; indice++) {
        if (nomes[indice] == nomeDoProduto) {
            produtoEncontrado = true
            console.log('estranho', carrinho)
            for (let index = 0; index < carrinho.length; index++) {
                if (carrinho[index] == nomeDoProduto) {
                    quantidade[index] += quantidadeProduto
                    produtoExiste = true
                }
            }
            if (produtoExiste == false) {
                carrinho[carrinho.length] = nomeDoProduto
                quantidade[quantidade.length] = quantidadeProduto
            }
        }
    }
    if (produtoEncontrado == false) {
        console.log('Esse produto não foi encontrado em nosso banco de dados')
    }
}

function retornarValorCarrinho(){
    let valorCarrinho = 0
    for (let index = 0; index < carrinho.length; index++) {
        let indexProduto = pegarProdutoPeloNome(carrinho[index])
        valorCarrinho += (precos[indexProduto] * quantidade[index])
    }
    console.log('Seu carrinho atual está custando: R$' + valorCarrinho)
}

function exibirCarrinho(){
    for (let index = 0; index < carrinho.length; index++) {
        console.log('Item: ' + index + ' Nome: ' + carrinho[index] + ' Quantidade:' + quantidade[index])
    }
    retornarValorCarrinho()
}

function removerProdutoCarrinho(nomeDoProduto, quantidadeProduto) {
    let novoCarrinho = []
    let novaQuantidade = []
    let removeuItem = false
    for (let index = 0; index < carrinho.length; index++) {
        if (carrinho[index] == nomeDoProduto) {
            if (quantidade[index] > quantidadeProduto) {
                quantidade[index] -= quantidadeProduto
            } else if (quantidade[index] <= quantidade) {
                for (let index = 0; index < carrinho.length; index++) {
                    if (carrinho[index] != nomeDoProduto) {
                        novoCarrinho[novoCarrinho.length] = carrinho[index]
                        novaQuantidade[novaQuantidade.length] = quantidade[index]
                        removeuItem = true
                    }
                }
            }
        }
    }
    if (removeuItem == true){
        carrinho = novoCarrinho
        quantidade = novaQuantidade
    }
}