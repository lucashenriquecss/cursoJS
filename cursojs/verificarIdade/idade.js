function enviar(){
    var txtidade = document.getElementById('ano')
    var res = document.querySelector('div#res')
    var msg = document.querySelector('div#msg')
    var idade =Number(txtidade.value)
    
    

    if(idade<=14){
        msg.innerHTML=`${idade}`
        res.src='./img/crianca.png'

    }else if(idade<=18){
        msg.innerHTML=`Adolecente`
        res.src='./img/jovem.png'
    }else if(idade<60){
        msg.innerHTML=`Adulto`
        res.src='./img/adulto.png'

    }else{
        msg.innerHTML=`Idoso`
        res.src='./img/idoso.png'
        
    }

}

enviar()