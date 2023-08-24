/*dom = procura os objetos no html e dar apelido aos obj HTML (usar)

evento = Que depende do usuário 
funçâo = 
*/
// dom
const lampada = document.querySelector('#lampada')
const acender = document.querySelector('#on')
const apagar = document.querySelector('#off')
const consertar = document.querySelector('#consertar') //Botão para consertar a lâmpada
let quebrada = false; //Variável para controlar se a lâmpada está quebrada

//evento
//addEventListener(evento, função)

acender.addEventListener('click', ligaLuz)
apagar.addEventListener('click', apagaLuz)
lampada.addEventListener('dblclick', quebraLampada) // dblclick = Clique duplo
consertar.addEventListener('click', trocarLampada) // Adicionar  evento para consertar a lâmpada

//função - Ultima parte

function ligaLuz(){
    if(!quebrada){
        lampada.src = "images/acesa.gif"
    }
}


function apagaLuz(){
    if(!quebrada){
    lampada.src="images/apagada.gif"
    }
}

function quebraLampada(){
    if(!quebrada){
    lampada.src="images/quebrada2.png"
    quebrada = true; // Definir a lâmpada quebrada
    }
}

function trocarLampada(){
    if(!quebrada)
    lampada.src="images/apagada.gif" //Resetar a lâmpada para apagada
    quebrada = false; // Define a lâmpada como consertada

}

