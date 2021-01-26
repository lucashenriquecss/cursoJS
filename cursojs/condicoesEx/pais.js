function verificar(){
    var pais = document.querySelector('input#txtpais')
    var result = document.querySelector('div#result')
    var verify = pais.value

    if(verify === 'brasil'){
        result.innerHTML=`VocÊ é brasileiro`

    }else{
        result.innerHTML=`voce é estrangeiro`
    }
    
}