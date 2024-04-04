var form = document.getElementById('bmiForm');
var resetButton = document.getElementById('reset-button');

var dwnloadbutton = document.getElementById('downloadBtn');
var consultBtn = document.getElementById('consultation')
var registBtn = document.getElementById('registration')

// alert function
function downloadBtn () {
    alert('Feature Not Available')
}

// submit button event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var age = document.getElementById('age').value;
    
    // convert height to meters
    height = height / 100;

    // calculate
    var bmi = weight / (height * height);

    // display result
    var resultElement = document.getElementById('result-bmi');
    resultElement.innerHTML = bmi.toFixed(2);

    // interpretation BMI
    var interpretation = document.getElementById('interpert-header');
    var interpretDetail = document.getElementById('interpert-detail');
    var category = document.getElementById('category-bmi');
    var catText = document.getElementById('cat-text-bmi');
    if (bmi < 18.5) {
        interpretation.innerHTML = 'Underweight'
        interpretDetail.innerHTML = 'You Are Underweight'
        category.innerHTML = 'Kurang dari 18.5'
        catText.innerHTML = 'Anda berada dalam kategori Underweight atau kurang berat badan. Cara terbaik untuk menaikkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.'
    } else if (bmi >= 18.5 && bmi < 25) {
        interpretation.innerHTML = 'Normal weight'
        interpretDetail.innerHTML = 'You Are Normal weight'
        category.innerHTML = 'Diantara 18.5 - 24.9'
        catText.innerHTML = 'Anda berada dalam kategori Normal weight atau berat badan normal. Dianjurkan untuk tetap menjaga pola makan dan berolahraga'
    } else if (bmi >= 25 && bmi < 30) {
        interpretation.innerHTML = 'Overweight'
        interpretDetail.innerHTML = 'You Are Overweight'
        category.innerHTML = 'Diantara 25 - 29.9'
        catText.innerHTML = 'Anda berada dalam kategori Overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.'
    } else {
        interpretation.innerHTML = 'Obese'
        interpretDetail.innerHTML = 'You Are Obese'
        category.innerHTML = 'Lebih dari 30'
        catText.innerHTML = 'Anda berada dalam kategori Obesitas atau terlalu gemuk. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.'
    }
})


// onclick event listener reset button
resetButton.onclick = function () {
    form.reset();

    // reset result
    var resultElement = document.getElementById('result-bmi');
    var interpretation = document.getElementById('interpert-header');
    var interpretDetail = document.getElementById('interpert-detail');
    var categoryBmi = document.getElementById('category-bmi');
    var categoryTextBmi = document.getElementById('cat-text-bmi');
    resultElement.innerHTML = 0;
    interpretation.innerHTML = '';
    interpretDetail.innerHTML = '';
    categoryBmi.innerHTML = '';
    categoryTextBmi.innerHTML = '';
    
}

dwnloadbutton.onclick = downloadBtn;
consultBtn.onclick = downloadBtn;
registBtn.onclick = downloadBtn;
