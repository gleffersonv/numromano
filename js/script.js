const numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanos = {1:'I', 4:'IV', 5:'V', 9:'IX', 10:'X', 40:'XL', 50:'L', 90:'XC', 100:'C', 400:'CD',500:'D', 900:'CM', 1000:'M'};
function converter(){
  let numeroDigitado = window.document.querySelector('#txtnum').value
   if (!Number(numeroDigitado)|| numeroDigitado > 3999){
        alert('Favor digitar numero inteiro');
   }
  let resultado = '';
  let i = 0;
  let num = numeroDigitado
  while (numeroDigitado > 0){
    const subtrair = numeros[i];
    if (subtrair > numeroDigitado){
      i++;
    }else{
      numeroDigitado -= subtrair;
      resultado += romanos[subtrair]
    }
    res.style.textAlign = 'center'
    res.innerHTML = `O numero ${num} convertido em Romanos é ${resultado}.`
  }
  if ( numeroDigitado < 0){
    window.alert('[ERROR] Digite um numero maior que 0')
  }
}
