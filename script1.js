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

        setNames();
        setPermission();

    })

}

const darkMode = () => {
    let main = document.getElementById('main')
    main.classList.toggle('dark-mode')
}

document.getElementById("btn").addEventListener("click", darkMode);

const setNames = () => {
    const gato1 = document.getElementById("gato-1-nome");
    const gato2 = document.getElementById("gato-2-nome");
    const gato3 = document.getElementById("gato-3-nome");

    gato1.innerHTML = body.Gatos[0].Nome; 
    gato2.innerHTML = body.Gatos[1].Nome;
    gato3.innerHTML = body.Gatos[2].Nome;

}

const setPermission = () => {
    const gato1 = document.getElementById("gato-1-permission");
    const gato2 = document.getElementById("gato-2-permission");
    const gato3 = document.getElementById("gato-3-permission");

    gato1.checked = body.Gatos[0].PodeEntrar 
    gato2.checked = body.Gatos[1].PodeEntrar 
    gato3.checked = body.Gatos[2].PodeEntrar 

}

const changePermission = (id) => {
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

window.changePermission = changePermission

setInterval(() => {
    loadData();
}, 2000);




