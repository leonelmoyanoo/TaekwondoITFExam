const CINTURONES = 'https://leonelmoyanoo.github.io/TaekwondoExam/json/cinturones.json';
console.log(CINTURONES);

const CARD_TOP = '<div class="card-body">';

const CARD_BOTTOM = '</div>';


async function printCinturones() {
    const response = await fetch(CINTURONES);
    const { cinturones } = await response.json();
    const cinturones_div = document.getElementById('cinturones');

    for (const key in cinturones) {
        let card = '<a href="examen.html?cinturon=' + cinturones[key] + '"  class="col-md-4 card btn  btn-primary">' + CARD_TOP + '<h5 class="card-title"> Cinturón ' + cinturones[key] + '</h5>' + CARD_BOTTOM + '</a>';
        let a = document.createElement('a');
        a.innerText = cinturones[key];
        a.href = 'examen.html?cinturon=' + cinturones[key];
        cinturones_div.innerHTML += card;
    }


}
printCinturones();
