
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const mensagem = document.querySelector('#mensagem')

setInterval(relogio, 1000)

function relogio(){
    let horadehoje = new Date()
    let hr = horadehoje.getHours()
    let min = horadehoje.getMinutes()
    let seg = horadehoje.getSeconds()

    if(hr<10){
        hr = "0" + hr
    }
    if(min<10){
        min = "0" + min
    }
    if(seg<10){
        seg = "0" + seg
    }

    if(hr > 05 && hr < 12){
        mensagem.innerText='Bom dia!!'
    }else if(hr > 12 && hr < 18){
        mensagem.innerText='Boa Tarde!!'
    }else{
        mensagem.innerText='Boa Noite!!'
    }

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
}