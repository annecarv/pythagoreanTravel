var valueHipotenusa = document.getElementById('hipotenusaInput')
var form = document.getElementById('dadosFormulario')
var valueCatetoA = document.getElementById('catetoAInput')
var valueCatetoB = document.getElementById('catetoBInput')
var button = document.getElementById('calculateButton')

form.addEventListener('submit',  function calcularHipotenusa(event) {
    event.preventDefault()

    let catetoA = valueCatetoA.value
    let catetoB = valueCatetoB.value

    let resultadoTheorema
    resultadoTheorema = Math.hypot(catetoA, catetoB).toFixed(2)
  
    let total = document.getElementById('resultadoTeoremaDePitagoras').innerHTML = `${resultadoTheorema.toString()}`
    console.log(total)
    console.log(catetoA)
    console.log(catetoB)


})
