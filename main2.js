function result() {
    let tuoi = Number(document.getElementById('number_a').value)
    if (tuoi >= 15) {
        document.getElementById('result').innerHTML = 'Học sinh đủ số tuổi vào lớp 10'
    }else {
        document.getElementById('result').innerHTML = 'Học sinh không đủ số tuổi vào lớp 10'

    }
}