
let mainProducts       = document.querySelector(".container")
let ulProducts         = document.createElement ("ul")

mainProducts.appendChild(ulProducts)



let asideBar             = document.createElement ("aside")
let inputPesquisa        = document.createElement ("input")
let searchButton         = document.createElement ("button")
let sectionCarrinho      = document.createElement ("section")
let tituloCarrinho       = document.createElement ("p")
let ulProductsSelecteds  = document.createElement ("ul")
ulProductsSelecteds.setAttribute("class", "ulCarrinho")
let carrinhoVazio = document.createElement("p")
let adicioneintes = document.createElement("p")
carrinhoVazio.setAttribute ("class", "carrinho-vazio")
adicioneintes.setAttribute ("class", "adicione-itens")



mainProducts.appendChild(asideBar)
asideBar.appendChild(inputPesquisa)
asideBar.appendChild(searchButton)
asideBar.appendChild(sectionCarrinho)
sectionCarrinho.appendChild(tituloCarrinho)
sectionCarrinho.appendChild(ulProductsSelecteds)

searchButton.innerHTML = "Pesquisar"
inputPesquisa.setAttribute("placeholder", "Digite aqui sua pesquisa")

tituloCarrinho.innerHTML = "Carinho de Compras"

for (let i = 0; i<data.length; i++){
let liProducts         = document.createElement ("li")
let imgProducts        = document.createElement ("img")
let categoriaProduct   = document.createElement ("p")
let nomeProduto        = document.createElement ("h4")
let descriptionProduct = document.createElement ("p")
let priceProduct       = document.createElement ("p")
let buttonAddCart      = document.createElement ("button")

ulProducts.appendChild(liProducts)
liProducts.appendChild(imgProducts)
liProducts.appendChild(categoriaProduct)
liProducts.appendChild(nomeProduto)
liProducts.appendChild(descriptionProduct)
liProducts.appendChild(priceProduct)
liProducts.appendChild(buttonAddCart)

categoriaProduct.setAttribute("class", "product-description")
buttonAddCart.setAttribute("class", "addToCart")

imgProducts.src = data[i].img
categoriaProduct.innerHTML = data[i].tag
nomeProduto.innerHTML = data[i].nameItem
descriptionProduct.innerHTML = data[i].description
priceProduct.innerHTML = `R$ ${data[i].value}`
buttonAddCart.innerText = "Adicionar ao Carrinho"
buttonAddCart.setAttribute("id", i+1)

buttonAddCart.addEventListener("click", function(event){
    let elemento = event.target
    let idElement = parseInt(elemento.id)
    insereListaCarrinho(idElement)
})
}
let sectiDescripCart = document.createElement ("section")
let divQuant         = document.createElement ("div")
let quantidadeCart   = document.createElement ("p")
let quantNumeroCart  = document.createElement ("p")
let divTotal         = document.createElement ("div")
let totalDoCart      = document.createElement ("p")
let totalNumeCart    = document.createElement ("p")

sectiDescripCart.setAttribute ("class", "section-descriCart")

asideBar.appendChild(sectiDescripCart)
sectiDescripCart.appendChild(divQuant)
sectiDescripCart.appendChild(divTotal)
divQuant.appendChild(quantidadeCart)
divQuant.appendChild(quantNumeroCart)
divTotal.appendChild(totalDoCart)
divTotal.appendChild(totalNumeCart)
ulProductsSelecteds.appendChild(carrinhoVazio)
ulProductsSelecteds.appendChild(adicioneintes)


carrinhoVazio.innerHTML = "Carrinho Vazio"
adicioneintes.innerHTML = "Adicione Itens"

let contagemLista = 0
let valorTotal = 0



function insereListaCarrinho (idElement){
    
    for (let j = 0; j<data.length; j++){
        let carrinho = data[j]
        
        if(carrinho.id === idElement){
            adicioneintes.remove()
            carrinhoVazio.remove()
            

         let liProductsSelecteds  = document.createElement ("li")
         let divLista = document.createElement("div")
         let imgProductsSelecteds = document.createElement ("img")
         let nomeProductSelected  = document.createElement ("h4")
         let priceProductSelected = document.createElement ("p")
         let removeFromCart       = document.createElement ("button")
        
         
         let listaCarrinho = document.querySelector(".ulCarrinho")

         listaCarrinho.appendChild(liProductsSelecteds)
         liProductsSelecteds.appendChild(imgProductsSelecteds)
         liProductsSelecteds.appendChild(divLista)
         divLista.appendChild(nomeProductSelected)
         divLista.appendChild(priceProductSelected)
         divLista.appendChild(removeFromCart)

         imgProductsSelecteds.src = carrinho.img
         nomeProductSelected.innerHTML = carrinho.nameItem
         priceProductSelected.innerHTML = `R$${carrinho.value}`
         removeFromCart.innerHTML = "Remover Produto"

         contagemLista ++ 
         quantNumeroCart.innerHTML = `${contagemLista}`

         //atribuyir nova classe e alterar

         let valoresProdutos = parseInt(carrinho.value)
         
         
         valorTotal += valoresProdutos
         
         quantidadeCart.innerHTML = "Quantidade"
         totalDoCart.innerHTML = "Total"
        

         removeFromCart.addEventListener('click', function(event){
            contagemLista --
            let liToRemove = event.path[2]
            liToRemove.remove()
            valorTotal -= valoresProdutos
            
            totalNumeCart.innerHTML = `R$${(valorTotal)}`
            quantNumeroCart.innerHTML = `${contagemLista}`
         })

         
        }

}

    totalNumeCart.innerHTML = `R$${(valorTotal)}`
    
}