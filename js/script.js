document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil nilai tinggi dan berat badan
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    // Validasi input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Masukkan nilai tinggi dan berat yang valid!');
        return;
    }

    // Hitung BMI
    let bmi = weight / Math.pow(height / 100, 2);
    let bmiCategory = '';

    // Tentukan kategori BMI
    if (bmi < 18.5) {
        bmiCategory = 'Kurus';
    } else if (bmi < 24.9) {
        bmiCategory = 'Normal';
    } else if (bmi < 29.9) {
        bmiCategory = 'Gemuk';
    } else {
        bmiCategory = 'Obesitas';
    }

    // Tampilkan hasil BMI
    document.getElementById('bmiResult').innerText = `BMI: ${bmi.toFixed(2)} (${bmiCategory})`;

    // Tampilkan penjelasan
    let explanation = '';
    switch (bmiCategory) {
        case 'Kurus':
            explanation = 'Anda termasuk dalam kategori kurus. Anda mungkin perlu menambah berat badan.';
            break;
        case 'Normal':
            explanation = 'Anda berada dalam kategori berat badan normal. Pertahankan!';
            break;
        case 'Gemuk':
            explanation = 'Anda berada dalam kategori gemuk. Anda mungkin perlu menurunkan berat badan.';
            break;
        case 'Obesitas':
            explanation = 'Anda berada dalam kategori obesitas. Konsultasikan dengan dokter untuk saran dan perawatan lebih lanjut.';
            break
        }
        document.getElementById('bmiExplanation').innerText = explanation;
    
        // Tampilkan hasil
        document.getElementById('resultContainer').style.display = 'block';
    });