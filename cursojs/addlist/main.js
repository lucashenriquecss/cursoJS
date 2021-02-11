let lista = document.querySelector('select#list')
let obj = document.querySelector('input#txtobj')
let res =document.querySelector('div#res')
let valores = []

function add(){
    valores.push(obj.value)
    let item = document.createElement('option')
    item.text=`${obj.value}`
    lista.appendChild(item)
    res.innerHTML=`Existem ${item.lenght} na sua lista`
}
add()