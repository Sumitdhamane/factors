function countFactors() {
    var number = parseInt(document.getElementById('numberInput').value);
    var count = 0;

    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }

    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }

    document.getElementById('factorCount').innerText = "Number of factors: " + count;
}
