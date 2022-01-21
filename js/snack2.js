/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


const teams = [
    {
        name: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        name: 'Lazio',
        puntiFatti: 0,
        falliSubiti: 0,
    },
]

// function
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for (let i = 0; i < teams.length; i++) {
    const team = teams[i];
    team.puntiFatti = getRandomNumber(1, 100)
    team.falliSubiti = getRandomNumber(1, 20)
}

console.log(teams)
const newStats = [];

for (let i = 0; i < teams.length; i++) {
    const team = teams[i]
    const { name, puntiFatti, falliSubiti } = team;
    newStats.push(name, puntiFatti, falliSubiti)
}
console.log(newStats)