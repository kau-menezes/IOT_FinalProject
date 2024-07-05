
import {service} from "./js/datebaseConfig.js"

const endPoint = "/iotgato/site"

// Definindo estrutura do corpo do meu objeto do banco.
var body = {
    
}

const loadData = () => {
    // const d = new Date();

    service.load(endPoint).then( data => {
        body = data;
        console.log(body);
        getClock();
    })

}

// chamado uma únicas vez ao início do script
const getClock = () =>{
    const timeControl = document.querySelectorAll('input[type="time"]');
    timeControl[0].value = body.InicioEntrada.substr(0, 5)
    timeControl[1].value = body.FimEntrada.substr(0, 5)
    timeControl[2].value = body.InicioSaida.substr(0, 5)
    timeControl[3].value = body.FimSaida.substr(0, 5)
}

const setClock = () =>{
    // event.preventDefault();
    const timeControl = document.querySelectorAll('input[type="time"]');
    body.InicioEntrada = timeControl[0].value
    body.FimEntrada = timeControl[1].value
    body.InicioSaida = timeControl[2].value
    body.FimSaida = timeControl[3].value
    service.set(endPoint, body)
    alert("Alterado com sucesso");
    location.href = '../index.html';
}


loadData()
window.setClock = setClock
