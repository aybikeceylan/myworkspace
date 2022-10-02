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

//! ODEV1: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.
// let not1;
// let toplam = 0;
// let sayac = 0;
// while (true) {
//     not1 = prompt(`Lutfen bir not girniz yada "Q" "q" ile çıkış yapınız`)

//     if ((Number(not1) > 0) && (Number(not1) <= 100)) {
//         console.log(not1)
//         toplam += Number(not1)
//         sayac += 1
//         sonuc = toplam / sayac

//     } else if ((not1 == "Q") || (not1 == "q")) {
//         console.log(`Ortalama Not: ${sonuc}`)
//         break
//     } else {
//         console.log("Geçerli bir karakter giriniz:");
//     }

// }

//! ODEV2 : Derste yazılan tahmin oyununu tekrar tekrar oynanabilecek hale getiriniz.
// let devam;
// do {
//     let hak = 5;
//     const rastgele = Math.round(Math.random() * 100)
//     console.log(rastgele)
//     let tahmin;
//     do {
//         tahmin = +prompt("lütfen bir tahmin yapınız:")
//         hak -= 1
//         if (tahmin === rastgele) {
//             console.log(`tebrikler ${5 - hak} kerede bildiniz`);
//             break;
//         } else if (tahmin < rastgele) {
//             console.log("ARTTIR ⬆")
//         } else {
//             console.log("AZALT ⬇");
//         }
//     } while (hak > 0)
//     if (tahmin !== rastgele) {
//         console.log("üzgünüz oyunu kaybettiniz 😔😔")
//     }
//     let cevap = prompt("Devam etmek ister misiniz E/H")
//     if (cevap == "E") {
//         devam = true
//     } else {
//         devam = false
//     }

// } while (devam)

//! ODEV1: tarkan string'indeki kelimelerin sayisini donduren
//! bir fonksiyon yaziniz.

// const tarkan = "Gel gunduzle gece olalim";

// const splited = tarkan.split(" ").length;
// console.log(splited);


//! ODEV2:
//! ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE<
// https://youtu.be/b7vfp5G4brE

// const youtube = "https://www.youtube.com/watch?v=b7vfp5G4brE<"

// const short = youtube.replace("be.com/watch?v=b7vfp5G4brE", ".be/b7vfp5G4brE")
// console.log(short);

//! ödev

//Write a function that takes an array of characters and reverses the letters in place.

//Examples:

//reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC

//reverse("Happy") ➞ yppaH

// const reverseString = function (string) {
//     string2 = string.split("")
//     arr1 = string2.reverse()
//     return lastString = arr1.join("")
// }

// console.log(reverseString("Clarusway Rocks!"));
// console.log(reverseString("Happy"));

//! ödev2
//Purpose of the this coding challenge is to write a code that given a string , returns reverse order of words
//Input : 'Clarusway' => Output : 'Clarusway'

//Input : 'days. big make things Little' => Output : 'Little things make big days.'

// Please note that, single word should not be reversed!

// const reverseWord = function (word) {
//     splittedWord = word.split(" ")
//     arr1 = splittedWord.reverse()
//     return lastWord = arr1.join(" ")
// }
// console.log(reverseWord("Clarusway"));
// console.log(reverseWord("days. big make things Little"));

//! ödev3
//Purpose of the this coding challenge is to write a code that given two sorted arrays, returns merged array of these inputs.

//For example:
//A = [12, 14, 16];
//B = [11, 13, 17];
//expectedOutput = [11, 12, 13, 14, 16, 17];

//A = [];
//B = [11, 13, 17];
//expectedOutput = [11, 13, 17];

// const mergeArray = (A, B) => {
//     combinedArr = A.concat(B)
//     sortedArr = combinedArr.sort((a, b) => a - b)
//     return sortedArr

// }

// A = [];
// B = [11, 13, 17];

// console.log(mergeArray(A, B))

// A = [12, 14, 16];
// B = [11, 13, 17];
// console.log(mergeArray(A, B))

//* Roman Numerals


// function intToRoman(num) {

//     let m = ["", "M", "MM", "MMM"];
//     let c = ["", "C", "CC", "CCC", "CD", "D",
//         "DC", "DCC", "DCCC", "CM"];
//     let x = ["", "X", "XX", "XXX", "XL", "L",
//         "LX", "LXX", "LXXX", "XC"];
//     let i = ["", "I", "II", "III", "IV", "V",
//         "VI", "VII", "VIII", "IX"];


//     let a1 = Math.floor(num / 1000);
//     let a2 = Math.floor((num % 1000) / 100);
//     let a3 = Math.floor((num % 100) / 10);

//     let thousands = m[a1];
//     let hundreds = c[a2];
//     let tens = x[a3];
//     let ones = i[num % 10];

//     let ans = thousands + hundreds + tens + ones;

//     return ans;
// }


// let number = 3549;
// console.log(intToRoman(number));


///* Bracket Validator

//! '(', '{', '[' are called "openers."
//! ')', '}', ']' are called "closers."
//! Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.


// let openers = ['(', '{', '[']
// let closers = [')', '}', ']']
// string = "{ [ }"
// newArray = string.split(" ")
// console.log(newArray);


// for (let j = 0; j < newArray.length; j++) {
//     for (let i = 0; i < openers.length; i++) {

//         if ((newArray[0] == openers[i]) && newArray[newArray.length - 1] == closers[i]) {

//             newArray.splice(0, 1)
//             console.log(newArray)

//             newArray.splice((newArray.length - 1), 1)
//             console.log(newArray)

//         } else if ((newArray[0] == openers[i]) && newArray[1] == closers[i]) {
//             newArray.splice(0, 1)
//             console.log(newArray)

//             newArray.splice(0, 1)
//             console.log(newArray)

//         }
//     }
// }

// if (newArray.length > 0) {
//     console.log("false")
// } else {
//     console.log("true");
// }


///* Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

//!given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:
//! 10 = max(10, 5, 2)
//! 7 = max(5, 2, 7)
//! 8 = max(2, 7, 8)
//! 8 = max(7, 8, 7)

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3
maxArray = []
for (let i = 0; i < (nums.length - k + 1); i++) {
    newNum = nums.slice(i, (i + k))
    console.log(newNum);
    maxNum = Math.max(newNum[0], newNum[1], newNum[2])
    console.log(maxNum)
    maxArray.push(maxNum)
    console.log(maxArray);
}

