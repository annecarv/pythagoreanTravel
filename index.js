
var form = document.getElementById('dadosFormulario')
var valueHipotenusa = document.getElementById('hipotenusaInput')
var valueCatetoA = document.getElementById('catetoAInput')
var valueCatetoB = document.getElementById('catetoBInput')
var button = document.getElementById('calculateButton')

form.addEventListener('submit',  function calcularHipotenusa(event) {
    event.preventDefault()
    let data = {
        valueHipotenusa: parseInt(valueHipotenusa.value),
        valueCatetoA: parseInt(valueCatetoA.value),
        valueCatetoB : parseInt(valueCatetoB.value)
    }
    data.valueHipotenusa = Math.pow(data.valueHipotenusa, 2)
    data.valueCatetoA = Math.pow(data.valueCatetoA, 2)
    data.valueCatetoB = Math.pow(data.valueCatetoB, 2)
    let resultadoTheorema = data.valueHipotenusa + data.valueCatetoA + data.valueCatetoB


    let teste = document.getElementById('resultadoTeoremaDePitagoras').innerHTML = `${resultadoTheorema.toString()}`
    return teste
})
