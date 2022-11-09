const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cinturon = urlParams.get('cinturon');

const CINTURON = 'https://leonelmoyanoo.github.io/TaekwondoExam/json/cinturones/' + cinturon + '.json';

async function printCinturon() {
    const response = await fetch(CINTURON);
    const data = await response.json();
    
    console.log(data);
}
printCinturon();