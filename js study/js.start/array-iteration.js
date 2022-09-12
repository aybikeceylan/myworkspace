//* =====================================================
//*                     FOR LOOP
//* ======================================================

// console.log("******* LOOPS IN ARRAYS ******");

// //?-------------- ÖRNEK -------------------
// const dizi = [-5, 15, 22, -4, 45, 78];

// const negatifler = [];
// const pozitifler = [];

// const dizelereAyir = (n) => {
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] < 0) {
//             negatifler.push(n[i]);
//         } else {
//             pozitifler.push(n[i]);
//         }
//     }
// };
// dizelereAyir(dizi);

// console.log(negatifler);
// console.log(pozitifler);
// console.log(dizi);

//?-------------- ÖRNEK -------------------
//? Dizideki notlarin ortalamasini hesaplayiniz.
// const notlar = [55, 77, 23, 89, 100];

// let toplam = 0;

// for (let i = 0; i < notlar.length; i++) {
//     toplam += notlar[i];
// }

// console.log("ORTALAMA:", toplam / notlar.length);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

// const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

// const findStudents = (arr, search) => {
//   let counter = 0;
//   for (let i in arr) {
//     if (search === arr[i]) {
//       counter++;
//     }
//   }
//   if (!counter) {
//     return `${search} can not be found`;
//   } else {
//     return `${search} found ${counter} times`;
//   }
// };

// const name = prompt("Please enter a name").toLowerCase();
// console.log(findStudents(students, name));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

// const findStudentsOf = (arr, search) => {
//     let counter = 0;
//     for (let item of arr) {
//         //? Ternary
//         // search === item ? counter++ : null;

//         //! Short-circuit yöntemi: && => kosul dogru (true) ise ifadeyi calisitir.
//         search === item && counter++;

//         //! Short-circuit yöntemi: || => kosul yanlis (false) ise ifadeyi çalıştır.
//         search === item || counter++;
//     }

//     return !counter
//         ? `${search} can not be found`
//         : `${search} found ${counter} times`;
// };

// const studentName = prompt("Please enter a name").toLowerCase();
// console.log(findStudentsOf(students, studentName));



//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

// console.log("****** ITERATION **********");

//
//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

// const prices = [100, 250, 50, 89];
// prices.forEach((p) => console.log(p));

//? ORNEK: prices dizisindekilerin toplamini konsola yazdiriniz */
// let sum = 0;
// prices.forEach((price) => (sum += price));
// console.log("SUM:", sum);

// //! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
// console.log(prices.forEach((price) => (sum += price))); //! undefined

//?-------------- ÖRNEK -------------------
//? prices dizisindeki her bir ara toplam degerini
//? konsola bastiriniz. Ayrica her bir fiyata %10 zam yapiniz.

// let total = 0;
// prices.forEach((price, index, arr) => {
//     total += price;
//     console.log(`${index + 1}.iteration: ${total}`);
//     arr[index] = Math.trunc(price * 1.1);
// });

// console.log(prices);

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
// let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

// const bigNames = names.map((name) => name.toUpperCase());
// console.log(bigNames, names);
// console.log(names.map((name) => name.toUpperCase()));

//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

// const euro = 18.23;
// const dolar = 18.19;
// const tlPrices = [100, 150, 100, 50, 80];

// const euroPrices = tlPrices.map((tl) => Number(tl / euro).toPrecision(3));
// console.log(euroPrices);

// const dolarPrices = tlPrices.map((tl) => Number(tl / dolar).toFixed(2));
// console.log(dolarPrices);

//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.

// const products = [
//     "Iphone12",
//     "samsungS20",
//     "lenovo",
//     "macbook pro",
//     "mac air",
//     "Galaxy tablet",
//     "macbook",
//     "Iphone12",
//     "mac air",
//     "lenovo",
//     "macbook pro",
//     "samsungS20",
// ];
//! Orjinal diziyi degistidik.
//?For UpperCase
// // products.map((p, i, arr) => (arr[i] = p.charAt(0).toUpperCase()));

// //?For Capitilize
// products.map((p, i, arr) => (arr[i] = p[0].toUpperCase() + p.slice(1)));
// console.log(products);

//* ======================================================
//*                CHAINING (PIPELINE)
//* ======================================================

//* ======================================================
//*                 FILTER METHOD
//* ======================================================
// const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

// const bigThan = salaries.filter((s) => s > 10000);
// console.log(bigThan, salaries);

// const range = salaries.filter((s) => s >= 6000 && s <= 10000);
// console.log(range);

//?-------------- ÖRNEK -------------------
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

// const lessThan9000Increase = salaries
//     .filter((s) => s < 9000)
//     .map((s) => Math.trunc(s * 1.1));

// console.log(lessThan9000Increase);

// salaries
//     .filter((s) => s < 9000)
//     .map((s) => Math.trunc(s * 1.1))
//     .forEach((s) => console.log(s));
//* ======================================================
//*                 REDUCE METHOD
//* ====================================================== 

const salaries = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

const sumOfSalaries = salaries.reduce((acc, val) => acc + val, 0)

console.log("SUM:", sumOfSalaries);



//? Ornek: Bir Firma, 9000 TL den az olan maaşlara %10 zam yapmak istiyor
//? ve zam yapılan bu kişilere toplam kaç TL ödeneceğini bilmek istiyor.
//? İlgili programı yazınız.

const sumOfRaisedSalaries = salaries
    .filter((sal) => sal <= 9000)
    .map((sal) => Math.trunc(sal * 1.1))
    .reduce((acc, salary) => acc + salary, 0);

console.log("Sum Of Raised Salaries:", sumOfRaisedSalaries);

