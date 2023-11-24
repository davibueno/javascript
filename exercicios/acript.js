let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function numero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function islista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    if(numero(num.value) && !islista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''

    }else {
        window.alert('Número invalido ou já se encontra na lista!')
    }
    num.value = ''
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Adicionar valores antes de finalizar')
    }else {
        let tot = valores.length
        let maior = valores[0]
        let menor =valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor foi ${maior}<p/>`
        res.innerHTML += `<p> O menor valor foi ${menor}</p>`
        res.innerHTML += `<p> a soma entre os valores foi ${soma}</p>`
        res.innerHTML += `<p> a media entre os valores é ${media}</p>`
    }
}