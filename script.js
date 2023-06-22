// Menangkap elemen form
const form = document.getElementById('temperature-form');
// Menangkap elemen input suhu
const temperatureInput = document.getElementById('temperature');
// Menangkap elemen pilihan konversi
const unitSelect = document.getElementById('unit');
// Menangkap elemen hasil konversi
const convertedTemperature = document.getElementById('converted-temperature');
// Menangkap elemen penjelasan hasil konversi
const explanation = document.getElementById('explanation');

// Menambahkan event listener untuk saat form dikirim
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah form melakukan submit

  // Mengambil nilai suhu dari input
  const temperature = parseFloat(temperatureInput.value);

  // Memvalidasi suhu
  if (isNaN(temperature)) {
    alert('Masukkan suhu dengan benar!');
    return;
  }

  // Mengambil unit yang dipilih
  const selectedUnit = unitSelect.value;

  // Melakukan konversi suhu
  let convertedTemp;
  let explanationText;

  if (selectedUnit === 'fahrenheit') {
    convertedTemp = (temperature * 9/5) + 32;
    explanationText = 'Suhu dalam Fahrenheit';
  } else if (selectedUnit === 'kelvin') {
    convertedTemp = temperature + 273.15;
    explanationText = 'Suhu dalam Kelvin';
  }

  // Menampilkan hasil konversi suhu
  convertedTemperature.textContent = `Hasil Konversi: ${convertedTemp.toFixed(2)}° ${selectedUnit.charAt(0).toUpperCase() + selectedUnit.slice(1)}`;
  explanation.textContent = explanationText;
});