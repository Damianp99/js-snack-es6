/*
SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

const images = [
    { format: 'JPG', imgSize: 340 },
    { format: 'PNG', imgSize: 182 },
    { format: 'GIF', imgSize: 287 },
    { format: 'JPG', imgSize: 451 },
    { format: 'GIF', imgSize: 428 },
    { format: 'JPG', imgSize: 199 },
    { format: 'PNG', imgSize: 347 },
]

console.log(images);


/*
const getSize = images.filter((img) => {
    if (img.imgSize > 250 && img.imgSize < 350) {
        return true;
    }
});

console.log(getSize)
*/

// function FILTER
const getSize = (array, min, max) => {
    return array.filter((img) => (img.imgSize > min) && (img.imgSize < max));
}
const range = getSize(images, 250, 350);
console.log(range)

/* SOLUZIONE CON FOREACH
const arraySlice = (arr, start, end) => {
    const newArray = [];
    arr.forEach((item, index) => {
        if (index >= start && index <= end) {
            newArray.push(item);
        }
    })
    return newArray; a
}
*/