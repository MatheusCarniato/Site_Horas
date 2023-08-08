function carregar() {
    var txt = document.getElementById('txt')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} Horas`
    
    if (hora >=0 && hora < 12) {
        img.src= 'Imagens/manhã.png'
        txt.innerHTML='Bom dia'
        document.body.style.background='#c4d18c'
    
    }else if (hora >=12 && hora <=18){
        img.src= 'Imagens/tarde.png'
        txt.innerHTML='Boa Tarde'
        document.body.style.background='#82a0f5'
    
    }else {
        img.src= 'Imagens/noite.png'
        txt.innerHTML='Boa Noite'
        document.body.style.background='#474747'
    }
}