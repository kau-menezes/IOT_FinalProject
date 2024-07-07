import { service } from "../../../scripts/datebaseConfig.js"

export const endPoint = "/iotgato/site"

// Definindo estrutura do corpo do meu objeto do banco.
let body = {}


export const loadData = () => {
    // export const d = new Date();

    service.load(endPoint).then( data => {
        body = data;
        console.log(body);

        setNames();
        setPermission();
        getClock()
    })
}

export const setNames = () => {
    const gato1 = document.getElementById("gato-1-nome");
    const gato2 = document.getElementById("gato-2-nome");
    const gato3 = document.getElementById("gato-3-nome");

    gato1.innerHTML = body.Gatos[0].Nome; 
    gato2.innerHTML = body.Gatos[1].Nome;
    gato3.innerHTML = body.Gatos[2].Nome;

}

export const setPermission = () => {
    const gato1 = document.getElementById("gato-1-permission");
    const gato2 = document.getElementById("gato-2-permission");
    const gato3 = document.getElementById("gato-3-permission");

    gato1.checked = body.Gatos[0].PodeEntrar 
    gato2.checked = body.Gatos[1].PodeEntrar 
    gato3.checked = body.Gatos[2].PodeEntrar 

}

export const changePermission = (id) => {
    switch (id.id) {
        case "gato-1-permission":
            body.Gatos[0].PodeEntrar = id.checked
            break

        case "gato-2-permission":
            body.Gatos[1].PodeEntrar = id.checked
            break

        case "gato-3-permission":
            body.Gatos[2].PodeEntrar = id.checked
            break
    }

    service.set(endPoint, body)
}

export const getClock = () =>{
    document.getElementById("entrada1").innerHTML = body.InicioEntrada[0];
    document.getElementById("entrada2").innerHTML = body.InicioEntrada[1];
    document.getElementById("entrada3").innerHTML = body.InicioEntrada[3];
    document.getElementById("entrada4").innerHTML = body.InicioEntrada[4];
    document.getElementById("entrada5").innerHTML = body.FimEntrada[0];
    document.getElementById("entrada6").innerHTML = body.FimEntrada[1];
    document.getElementById("entrada7").innerHTML = body.FimEntrada[3];
    document.getElementById("entrada8").innerHTML = body.FimEntrada[4];

    document.getElementById("saida1").innerHTML = body.InicioSaida[0];
    document.getElementById("saida2").innerHTML = body.InicioSaida[1];
    document.getElementById("saida3").innerHTML = body.InicioSaida[3];
    document.getElementById("saida4").innerHTML = body.InicioSaida[4];
    document.getElementById("saida5").innerHTML = body.FimSaida[0];
    document.getElementById("saida6").innerHTML = body.FimSaida[1];
    document.getElementById("saida7").innerHTML = body.FimSaida[3];
    document.getElementById("saida8").innerHTML = body.FimSaida[4];
}
