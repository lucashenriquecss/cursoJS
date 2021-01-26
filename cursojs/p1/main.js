var tn1 = document.getElementById('txtn1')
var tn2 = document.getElementById('txtn2')
var tn3 = document.getElementById('txtn3')
var tn4 = document.getElementById('txtn4')
var res = document.getElementById('res') 

function calc(){
 

  var n1 = Number(tn1.value)
  var n2 = Number(tn2.value)
  var n3 = Number(tn3.value)
  var n4 = Number(tn4.value)
  
  var result = (n1+n2*n3)/n4

  res.innerHTML= `${result}`

}
calc()

