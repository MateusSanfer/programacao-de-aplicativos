const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')


setInterval(calendario)

function calendario(){

    let dataHoje = new Date()
    let dia_h = dataHoje.getDate()
    let mes_h = dataHoje.getMonth() + 1
    let ano_h = dataHoje.getFullYear()

    if(dia_h< 10){
        dia_h = "0" + dia_h
    }
    if(mes_h< 10){
        mes_h = "0" + mes_h
    }

    dia.textContent = dia_h
    mes.textContent = mes_h
    ano.textContent = ano_h
    
}