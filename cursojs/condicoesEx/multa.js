
function calcular(){
    
    var txtvel = document.querySelector('input#txtvel')
    var tela = document.querySelector('div#resultado')
    var calc = Number(txtvel.value)

    if(calc <= 50){
        tela.innerHTML=`A sua velocidade é de ${calc}!!`
    }else{
        tela.innerHTML=`A sua velocidade esta a cima da permitida, voce foi multado!`
    }


   
}

calcular()