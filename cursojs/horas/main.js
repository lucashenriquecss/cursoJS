

function mudarhora(){
    var msg = document.getElementById('msg')
    var img= document.getElementById('img')
    var data = new Date()
    var hora=//digite a hora

    msg.innerHTML=`${hora}`

    if (hora >=0 && hora <12){
        msg.innerHTML=`bom dia`
        img.src = './img/manha2.png'
        document.body.style.backgroundImage = "url('./img/manha.png')"; 

    }else if(hora >=12 && hora <18){
       img.src = './img/tarde2.png'
       msg.innerHTML=`boa tarde`
       document.body.style.backgroundImage = "url('./img/tarde.png')"; 

    }else{
        msg.innerHTML=`boa noite`
        img.src = './img/noite2.png'
        document.body.style.backgroundImage = "url('./img/noite.png')"; 
    }
  

}

mudarhora()