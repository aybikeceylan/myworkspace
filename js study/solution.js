// ?ORNEK1: Console'dan girilen bir sayisinin pozitif,negatif
//     ? yada 0 oldugunu tespit ederek yazdiriniz.

// const sayı = +prompt(`bir sayı giriniz:`)
// if (sayı > 0) {
//     console.log(`${sayı} pozitiftir`)
// } else if (sayı < 0) {
//     console.log(`${sayı} negatiftir`)
// } else {
//     console.log(`${sayı} a eşittir`)
// }

// ?ORNEK2: console'dan 3 tamsayi alarak bunlarin en buyugunu
//     ? yazdiriniz.

// const n1 = +prompt("sayı1:")
// const n2 = +prompt("sayı2:")
// const n3 = +prompt("sayı3:")

// if (n1 >= n2 && n1 >= n3) {
//     console.log(`${n1} en büyüktür`);
// } else if (n2 >= n1 && n2 >= n3) {
//     console.log(`${n2} en büyüktür`)
// } else {
//     console.log(`${n3} en büyüktür5`);
// }

// !ODEV1: Dort Islem Hesap Makinasi

// const n1 = +prompt("sayı1:")
// const op = prompt("yapılacak işlemi giriniz:")
// const n2 = +prompt("sayı2:")

// if (op == "+") {
//     let sonuc = n1 + n2
//     console.log(sonuc)
// } else if (op == "-") {
//     let sonuc = n1 - n2
//     console.log(sonuc);
// } else if (op == "*") {
//     let sonuc = n1 * n2
//     console.log(sonuc);
// } else if (op == "/") {
//     let sonuc = n1 / n2
//     console.log(sonuc);

// } else
//     console.log("Geçerli bir 4 işlem operatörü giriniz(+,-,*,/):");

// !ODEV2
// !Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

// !Program
//     !Pazartesi, Salı, Çarşamba, Perşembe -> InClass
//     !Cuma -> Teamwork
//     !Cumartesi -> InClass + Workshop
//     !Pazar -> Self - Study
//     !Aksi takdirde -> Yanlis gun girildi.


//     const day = prompt("Gün Giriniz:")
//     let lesson;

//     switch (day) {
//         case "pazartesi":
//         case "salı":
//         case "çarşamba":
//         case "perşembe":
//             lesson = "InClass"
//             break;
//         case "cuma":
//             lesson = "Teamwork"
//             break;
//         case "cumartesi":
//             lesson = "InClass + Workshop"
//             break;
//         case "pazar":
//             lesson = "Self-Study"
//             break;

//         default:
//             alert("Günleri Tam adıyla, kısaltma yapmadan, küçük harfle yazınız")
//             break;
//     }
//     console.log(lesson)

//     !ODEV3:Maasi asgari ucretten az olanlara % 50 zam,
//         !fazla olanlara ise % 10 zam yapmak istiyoruz.

//     const maas = +prompt("maaşınızı giriniz")

//     let raise = maas >= 5000 ? maas * 1.1 : maas * 1.5
//     console.log(raise)


//     !ODEV4: Console’dan kişinin gelir ve gider miktarını alan
//     !eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//     !değilse  Kredi Verilemez 🥺
//     !şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.

//     const income = +prompt("Gelirinizi giriniz:")
//     const expence = +prompt("Giderinizi giriniz:")

//     let interest = income - expence >= 5000 ? "Kredi Verilebilir 🤑" : "Kredi Verilemez 🥺"
//     console.log(interest);

// ODEV1: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

