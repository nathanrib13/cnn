const wishList = document.querySelector(".pix-key")

wishList.addEventListener("click", (event)=>{
    const body = document.getElementById("#body")

    const pixModal = document.createElement ("div")
    const pixContainer = document.createElement ("div")
    const qrcodeContainer = document.createElement ("div")
    const titleDiv = document.createElement ("div")
    const footerDiv = document.createElement ("div")
    let pixQrcode = document.createElement ("img")
    const title = document.createElement ("h1")
    const text1 = document.createElement ("p")
    const text2 = document.createElement ("p")
    const text3 = document.createElement ("p")
    const text4 = document.createElement ("p")
    const closeButton = document.createElement ("button")

    pixModal.setAttribute ("class", "pix-modal")
    pixContainer.setAttribute ("class", "pix-container")
    pixQrcode.setAttribute ("class", "pix-qrcode")
    title.setAttribute ("class", "pix-title")
    qrcodeContainer.setAttribute ("class", "qrcode-container")
    titleDiv.setAttribute ("class", "title-div")
    footerDiv.setAttribute ("class", "footer-div")
    text3.setAttribute ("class", "text-3")
    text1.setAttribute ("class", "text-1")
    text4.setAttribute ("class", "text-4")
    closeButton.setAttribute ("class", "close-button")
    
    setTimeout(()=>{
        pixModal.classList.add("show");
    },200)
    
    pixQrcode.src = "./qrcode.jpeg"
    title.innerHTML = "PIX"
    text1.innerHTML = "Sua contribuição sempre será lembrada!"
    text2.innerHTML = "Chave Pix: ff70ff8f-3ada-467a-a8a1-a8a1fa41c318"
    closeButton.innerHTML = "X"
    

    body.appendChild(pixModal)
    pixModal.appendChild(pixContainer)
    titleDiv.appendChild(title)
    titleDiv.appendChild(text1)
    pixContainer.appendChild(titleDiv)
    pixContainer.appendChild(qrcodeContainer)
    qrcodeContainer.appendChild(pixQrcode)
    footerDiv.appendChild(text2)
    footerDiv.appendChild(text3)
    footerDiv.appendChild(text4)
    pixContainer.appendChild(footerDiv)
    pixContainer.appendChild(closeButton)

    
    closeButton.addEventListener("click", (event)=>{
        pixModal.remove()
    })
    
  
})


