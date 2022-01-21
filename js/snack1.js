/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/
const bikes = [
    {
        name: 'Flash',
        weight: 12,
    },
    {
        name: 'Saetta',
        weight: 7,
    },
    {
        name: 'Strike',
        weight: 15,
    },
]

let lightBike = bikes[0];

for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i]
    const { weight } = bike;
    if (weight < lightBike.weight) lightBike = bike;
}

console.log(lightBike)