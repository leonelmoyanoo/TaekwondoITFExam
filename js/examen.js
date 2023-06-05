const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cinturon = urlParams.get('cinturon');

const teoria_div = document.getElementById('TEORIA');
const aprender_div = document.getElementById('APRENDER');
const tul_div = document.getElementById('TUL');


const cinturon_title = document.getElementById('cinturonTitle');

const CINTURON = 'https://leonelmoyanoo.github.io/TaekwondoExam/json/cinturones/' + cinturon + '.json';
const CONTENIDO = 'https://leonelmoyanoo.github.io/TaekwondoExam/json/contenido.json';
const CINTURONES = 'https://leonelmoyanoo.github.io/TaekwondoExam/json/cinturones.json';


card_custom = document.getElementsByClassName('card-custom');

cinturon_title.innerHTML = cinturon;

function obtenerClaves(objeto) {
    let claves = [];

    for (let clave in objeto) {
        claves.push(clave);

        if (typeof objeto[clave] === "object" && objeto[clave] !== null) {
            claves = claves.concat(obtenerClaves(objeto[clave]));
        }
    }

    return claves;
}

async function printCinturon() {
    const response3 = await fetch(CONTENIDO);
    let contenido = await response3.json();

    const response2 = await fetch(CINTURONES);
    let { cinturones } = await response2.json();
    cinturones = cinturones[0];

    for (var i = 0; i < card_custom.length; i++) {
        var element = card_custom[i];
        element.style.boxShadow = '5px 5px 10px ' + cinturones[cinturon];
    }


    const response = await fetch(CINTURON);
    const data = await response.json();

    for (const key in data["Tul"][0]) {
        let text = key;
        tul_div.innerHTML += '<p class="card-text tul">' + text + '</p>';
    }
    for (const key in data["Evaluacion"]) {
        if (typeof data["Evaluacion"][key] === 'string') {
            let text = data["Evaluacion"][key];
            aprender_div.innerHTML += '<p class="card-text aprender">' + text + '</p>';
        } else {
            let claves = obtenerClaves(data["Evaluacion"][key]['Teoría']);
            claves.forEach(element => {
                let text = data["Evaluacion"][key]['Teoría'][element];
                if (typeof text === "object") {
                    let first_key = Object.keys(text)[0];
                    title = '<h5 class="font-weight-bold ">' + contenido[first_key][0] + '</h5>'
                    p = '';
                    for (const key2 in text) {
                        text[key2].forEach(item => {
                            console.log(item);
                        });
                        console.log(contenido[first_key][1][0][text[key2]]);
                        p += '<p class="card-text teoria">' + first_key + text[key2] + ' - ' + contenido[first_key][1][0][text[key2]] + '</p>';
                    }
                    teoria_div.innerHTML += title + p ;

                }else if (typeof text === "string") {
                    teoria_div.innerHTML += '<p class="card-text teoria">' + text + ' - ' + contenido[text] + '</p>';
                }
            });
        }
    }
}
printCinturon();

