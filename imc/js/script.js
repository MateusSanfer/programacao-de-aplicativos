const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')
const mensagem = document.querySelector('#mensagem')

//Evento 

botao.addEventListener('click', imc)

function imc(){
    let weight = peso.value
    let height = Number(altura.value) //Number = para alterar o valor de string para numeros 
    let imcFinal = weight/(height*height)

    if (!weight || !height) {
        // Verifica se os campos estão vazios
        mensagem.innerHTML = 'Por favor, preencha todos os campos.';
        return; // Sai da função para evitar cálculos inválidos
    }

    resultado.textContent = "Seu IMC é: " + imcFinal.toFixed(2)



if(imcFinal < 18 ){
    mensagem.innerHTML = '<strong>Magreza</strong> <br> Veio pra que?'
}else if(imcFinal >= 18 && imcFinal < 25){
    mensagem.innerHTML = '<strong>Peso Ideal.</strong> <br> Está tudo bem'
    
}else if(imcFinal >= 25 && imcFinal < 30){
    mensagem.innerHTML = '<strong>Sobrepeso</strong> <br> Seu final esta próximo'
}else if(imcFinal >= 30 && imcFinal < 35){
    mensagem.innerHTML = '<strong>Obesidade Grau I.</strong> <br> Já está vendo a Luz no Túnel?'

}else if(imcFinal >= 35 && imcFinal < 40){
    mensagem.innerHTML = '<strong>Obesidade Grau II</strong> <br> Seu final já começou!'
}else {
    mensagem.innerHTML = '<strong>Obesidade Mórbida</strong> <br> Sua hora Chegou! Pode tentar correr, eu aguardo!'
}
}
