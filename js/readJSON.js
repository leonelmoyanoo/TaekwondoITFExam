const CINTURONES = 'https://leonelmoyanoo.github.io/TaekwondoExam/json/cinturones.json';

const CARD_TOP = '<div class="card-body">';

const CARD_BOTTOM = '</div>';


async function printCinturones() {
    const response = await fetch(CINTURONES);
    const { cinturones } = await response.json();
    const cinturones_div = document.getElementById('cinturones');

    for (const key in cinturones) {
        let first_key = Object.keys(cinturones[key])[0];
        let color = cinturones[key][first_key][0];
        let card = '<a style="background:' + color + '" href="examen.html?cinturon=' + first_key + '"  class="col-md-4 card btn  btn-primary">' + CARD_TOP + '<h3 class="card-title"> Cinturón ' + first_key + '</h3>' + CARD_BOTTOM + '</a>';
        cinturones_div.innerHTML += card;
    }


}
printCinturones();
