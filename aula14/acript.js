function verificador(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.querySelector("#textano")
    var res = document.querySelector("#res")
    var idade = ano - Fano
    if(Fano.value.length == 0 || Fano.value > ano ){
       window.alert('[ERRO]  seus dados estão errados tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homen'
            if(idade >=0 && idade <= 10){
                img.setAttribute('src', 'imagens/crianco.jpg') 
            }else if( idade < 21) {
                img.setAttribute('src', 'imagens/jovem.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/homen.jpg')
            }else{
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <= 10){
                img.setAttribute('src', 'imagens/crianca.jpg') 
            }else if( idade < 21) {
                img.setAttribute('src', 'imagens/jovam.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/mulher.jpg')
            }else{
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos` 
        res.appendChild(img)
             
       
    }
    
}
 