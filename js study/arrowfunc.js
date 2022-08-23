//! Arrow function

// örnek silindir hacmi

// const r = Number(prompt("yarıçap griniz"))
// const h = Number(prompt("yükseklik griniz"))

// const hacimHesapla = (r, h) => Math.PI * r * r * h;

// console.log(`${r} , ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)} }`);


// örnek2 yaş hesaplama


// const bornDate = Number(prompt("doğum tarihi giriniz"));

// const calcAge = (bornDate) => {
//     const age = new Date().getFullYear() - bornDate
//     return age
// }
// console.log("yasınız:" + calcAge(bornDate))

//* ORNEK: Yas hesapla
//************************************************/

// const tarih = Number(prompt("Dogum Tarihini giriniz:"));

// //! Arrow Func yontemi ile tanimlama
// const yasHesapla = (tarih) => {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// // console.log("YASINIZ:" + yasHesapla2(tarih));
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alrsiniz.

// //! Func Expression yontemi ile tanimlama
// const yasHesapla2 = function (tarih) {
//   const yas = new Date().getFullYear() - tarih;
//   return yas;
// };

// console.log("YASINIZ:" + yasHesapla(tarih));


//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

const fibo = (n) => {
    let fib1 = 1;
    let fib2 = 1;
    let toplam = 0;

    for (let i = 2; i < n; i++) {
        toplam = fib1 + fib2
        fib1 = fib2;
        fib2 = toplam;
    }
    return fib2;
};

const n = +prompt("n terimini giriniz:")
if (n <= 0) {
    console.log("lütfen 0 dan büyük bir sayı giriniz");
} else {
    console.log(`FİBO(${n}) => ${fibo(n)}`);
}
