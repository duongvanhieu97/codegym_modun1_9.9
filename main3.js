function result() {
    let number = Number(document.getElementById('number').value)
    if (number > 0) {
        document.getElementById('result').innerHTML = 'Số nguyên lớn hơn không'
    }else if (number === 0){
        document.getElementById('result').innerHTML = 'Số nguyên bằng không'
    }else {
        document.getElementById('result').innerHTML = 'Số nguyên nhỏ hơn không'
    }
}