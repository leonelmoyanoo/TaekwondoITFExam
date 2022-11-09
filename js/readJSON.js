const CINTURONES = './json/cinturones.json';
console.log(CINTURONES);

async function printJSON() {
    const response = await fetch(CINTURONES);
    const json = await response.json();
    console.log(json);
}
printJSON();
