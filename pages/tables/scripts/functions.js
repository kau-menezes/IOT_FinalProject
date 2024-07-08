
import {service} from "../../../scripts/datebaseConfig.js"

const endPoint = "/iotgato/site/gatoTabela"

// Definindo estrutura do corpo do meu objeto do banco.
let body = {}

export const loadData = () => {
    // const d = new Date();

    service.load(endPoint).then( data => {
        body = data;
        console.log(body);
        loadTable();
    })
}

export const loadTable = () =>{
    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var tr = document.createElement("tr");

    var t = document.createElement("th");
    t.append("Gato")
    tr.append(t);

    t = document.createElement("th");
    t.append("Porta")
    tr.append(t);
    
    t = document.createElement("th");
    t.append("Hora")
    tr.append(t);
    
    t = document.createElement("th");
    t.append("Entrada/Saida");
    tr.append(t);

    thead.append(tr);
    tabela.append(thead);
    for(var i=0;i<body.length;i++){
            tr = document.createElement("tr");
            for(var j = 0 ; j < 4 ; j++){
                t = document.createElement("td");
                var texto=j != 3 ? document.createTextNode(body[i][j]): body[i][j]? document.createTextNode("Entrada"): document.createTextNode("Saída");
                t.appendChild(texto);
                tr.appendChild(t);
            }
            tbody.appendChild(tr);
        }
        tabela.appendChild(tbody);
    document.getElementById("cat_table").appendChild(tabela);
}




