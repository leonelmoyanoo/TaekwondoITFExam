const CINTURONES = 'https://leonelmoyanoo.github.io/TaekwondoExam/json/cinturones.json';
console.log(CINTURONES);

async function printCinturones() {
    const response = await fetch(CINTURONES);
    const { cinturones } = await response.json();
    const cinturones_div = document.getElementById('cinturones');

    for (const key in cinturones) {
        let a = document.createElement('a');
        a.innerText = cinturones[key];
        a.href = 'examen.html?cinturon=' + cinturones[key];
        cinturones_div.appendChild(a);
    }


}
printCinturones();
