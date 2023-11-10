function calcular(){
    let num = document.getElementById('tnt')
    let res = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('por favor digite um número')
    }else{
        let n = Number(num.value)
        
        res.innerHTML = ''
     for(let c = 1; c <=10; c++){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        res.appendChild(item)
     }
    }
}