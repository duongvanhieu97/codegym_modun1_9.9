function result() {
    let numberA = Number(document.getElementById('numberA').value)
    let numberB = Number(document.getElementById('numberB').value)
    let numberC = Number(document.getElementById('numberC').value)

    if (numberA > numberB) {
        if (numberA > numberC) {
            document.getElementById('result').innerHTML = 'Số lớn nhất :' + numberA
        }else {
            document.getElementById('result').innerHTML = 'Số lớn nhất :' + numberC
        }
    }else if (numberB < numberC){
        document.getElementById('result').innerHTML = 'Số lớn nhất :' + numberC
    }else {
        document.getElementById('result').innerHTML = 'Số lớn nhất :' + numberB

    }
}