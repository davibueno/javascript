function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora <= 12){
        img.src = 'imagens/manhã.avif'
        
    }else if(hora > 12 && hora <= 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = 'red'
    } else {
        img.src = 'imagens/noite.avif'
        document.body.style.background = 'black'
    }
}