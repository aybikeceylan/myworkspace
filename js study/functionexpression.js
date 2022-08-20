//! function expression yöntemi

// const hesapla = function (n1, n2) {
//     return (n1 + n2)
// }

// console.log(hesapla(3, 5));


//* örnek

// const oddEven = function (number) {
//     return number % 2 ? `${number} tektir` : `${number} çifttir`
// };
// console.log(oddEven(5))

//* örnek2

const findBig = function (n1, n2, n3) {
    let theMost;
    if (n1 >= n2 && n1 >= n3) {
        theMost = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        theMost = n2;
    } else {
        theMost = n3;
    }
    return theMost;
};

const n1 = +prompt("sayı1:")
const n2 = +prompt("sayı2:")
const n3 = +prompt("sayı3:")

console.log("girilen sayıların en büyüğü:", findBig(n1, n2, n3));
