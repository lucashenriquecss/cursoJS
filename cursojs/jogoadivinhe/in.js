function random(min,max){
    min =Math.ceil(1)
    max=Math.floor(100)
    return document.write(Math.floor(Math.random() * (max - min)) + min)
}

random()