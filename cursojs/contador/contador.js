function enviar(){
    let ini = document.getElementById('inicio')
    let fim  = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0){
        res.innerHTML='Impossivel de realizar a contagem, preencha os campos a cima!'
    }else{
        res.innerHTML='Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i< f) {
            //crescente
            for (let cont = i; cont <= f; cont+=p) {
                res.innerHTML+=`${cont} -`         
            }
        }else{
            //regressiva
            for (let c = i; c >=f; c -= p){
                res.innerHTML+=`${c}  -`
        
            }
        }
    }

}

enviar()