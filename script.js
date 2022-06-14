/*
abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 Abaixo do Peso
Entre 18,5 e 24,99 Peso Normal
Entre 25 e 29,99 Acima do Peso
*/

// peso /(altura*altura);


//variaveis padrão que vai utilizar
var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault(); // prevenir para manter dados
    //pegar valor digitado no input
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //vamos fazer o calculo
    imc = peso / (altura*altura)

    //vamos fazer as condições
    resultado = document.getElementById('resultado');
    if(imc < 17){
       resultado.innerHTML = '<br/> Seu IMC foi: ' + imc.toFixed(2) + '</br> Cuidado você está muito abaixo do peso'
    }else if (imc > 17 && imc < 18.50){
       resultado.innerHTML = '<br/> Seu IMC foi: ' + imc.toFixed(2) + '</br> Você esta abaixo do peso!'
    }else if (imc >= 18.5 && imc < 24.99){
       resultado.innerHTML = '<br/> Seu IMC foi: ' + imc.toFixed(2)  + '</br> Você esta no peso ideal!'
    }else if(imc > 25 && imc <= 29.99){
       resultado.innerHTML = '<br/> Seu IMC foi: ' + imc.toFixed(2)  + '</br> Você esta acima do peso!'
    }else if( imc >= 30 ){
       resultado.innerHTML = '<br/> Seu IMC foi: ' + imc.toFixed(2)  + '</br> Cuidado Obesidade!'
    }

    // agora vamos limpar os campos
    document.getElementById('peso').value='';
    document.getElementById('altura').value='';
}