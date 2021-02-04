function tabuada(){
    let num= document.getElementById('num')
    let res = document.getElementById('res')

    if (num.value.length == 0) {
        res.innerHTML='Não existe tabuado de zero!'
    }else{
        let n =Number(num.value)
        for(let count=1; count<=10; count++){
            res.innerHTML=`${n} * ${count} = ${n * count}`
        }

    }
   
}

tabuada()