const CINTURONES = 'https://leonelmoyanoo.github.io/TaekwondoITFExam/json/cinturones.json';

const CARD_TOP = '<div class="card-body">';

const CARD_BOTTOM = '</div>';


async function printCinturones() {
    const response = await fetch(CINTURONES);
    let { cinturones } = await response.json();
    const cinturones_div = document.getElementById('cinturones');

    cinturones = cinturones[0];
    for (const key in cinturones) {
        console.log(key)
        let first_key = Object.keys(cinturones[key]);
        let color = cinturones[key][first_key];
        let card = '<a style="background:' + color + '" href="examen.html?cinturon=' + key + '"  class="col-md-4 card btn  btn-primary">' + CARD_TOP + '<h3 class="card-title"> Cinturón ' + key + '</h3>' + CARD_BOTTOM + '</a>';
        cinturones_div.innerHTML += card;
    }


}
printCinturones();
