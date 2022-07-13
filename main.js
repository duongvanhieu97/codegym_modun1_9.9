function result() {
    let a = Number(document.getElementById('number_a').value)
    let b = Number(document.getElementById('number_b').value)
    if (a % b === 0) {
        document.getElementById('result').innerHTML = 'Số a chia hết cho b'
    }else {
        document.getElementById('result').innerHTML = 'Số a không chia hết cho b'

    }
}