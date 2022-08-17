//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

const not = +prompt("lütfen 0-100 arasında bir not giriniz")

while (not < 0 || not > 100) {
    console.log("not 0-100 arasında olmalıdır");
    not = +prompt("lütfen 0-100 arasında bir not giriniz")
}
console.log("girdiğiniz not:", not);



// if (not<0 || not>100) {
//     alert("not 0-100 arasında olmalıdır")

// }

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz

let not1;
do {
    not1 = +prompt("lütfen 0-100 arasında bir not giriniz")
} while (not1 < 0 || not1 > 100)

console.log("girdiğiniz not:", not1);
