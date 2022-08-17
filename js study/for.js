// const n = +prompt("bir sayı giriniz:")
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//     toplam += i;
// }
// console.log("sonuc:", toplam);

// //? Ornek: 0-100 Arasinda 10 adet rasgele tamsayi ureten kodu
// //? for dongusu ile yaziniz..

// //* NOT:
// //* Math.floor() =>surekli asagiya yuvarlar
// //* Math.ceil() =>sürekli yukariya yuvarlar
// //* Math.round() => degerine gore yuvarlar.
// //* Math.trunc() => kesirli sayinin tam kismini alir.

// for (let i = 1; i <= 10; i++) {
//     const rastgele = Math.round(Math.random() * 100);
//     console.log(rastgele);
// }

//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.
// const n = +prompt(" pozitif bir sayı giriniz:")
// let asal = true;

// for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//         asal = false;
//         break;
//     }
// }

// const sonuc = asal === true ? "ASALDIR" : "ASAL DEĞİLDİR";
// console.log(`${n} ${sonuc}`);

