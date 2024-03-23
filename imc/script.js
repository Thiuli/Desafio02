const form = document.getElementById('imc-form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const altura = parseFloat(document.getElementById('altura').value) / 100; // Convert cm to meters
  const peso = parseFloat(document.getElementById('peso').value);

  const imc = peso / (altura * altura);

  let mensagem = "";
  if (imc < 18.5) {
    mensagem = "Abaixo do peso";
  } else if (imc < 18.5 - 24.9) {
    mensagem = "Peso ideal";
  } else if (imc < 25.0 - 29.9) {
    mensagem = "Sobrepeso";
} else if (imc < 30 - 34.9) {
    mensagem = "Obsidade grau I";
} else if (imc < 35.0 - 39.9) {
    mensagem = "Obsidade grau II";
    
  } else {
    mensagem = "Obesidade grau III";
  }

  resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}. ${mensagem}`;
});