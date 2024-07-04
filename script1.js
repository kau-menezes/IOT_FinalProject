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

    gato1.innerHTML = body[0].Nome; 
    gato2.innerHTML = body[1].Nome;
    gato3.innerHTML = body[2].Nome;

}

const changePermission = (id) => {

    let checkbox = document.querySelector('#id:checked')
    console.log(id);

}

window.changePermission = changePermission

setInterval(() => {
    loadData();
}, 2000);




