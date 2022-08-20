
// //! 1.Yöntem : Function Declaration
// //*Örnek1
// yazdır(); //* invoke,call,çağırma

// function yazdır() {           //! Fonksiyonun tanımlanması
//     console.log("merhaba");
// }

// //* örnek2
// function selamla(ad, soyad = "noname") {
//     console.log(`merhaba ${ad} ${soyad}`);
// }


// selamla("can", "yılmaz")
// selamla("canan", "öztürk")
// selamla("aybike")

// //! Bir parametreyi cagirma sirasinda kullanmaz isek onun
// //! yerine default parametre atayabiliriz. Ornekteki lastName
// //! parametresi icin default değer olarak '' atanmistir.


// //*örnek3

// function yasHesapla(isim, dogumTarihi) {
//     // const sonuc = `${isim} ın yaşı ${new Date().getFullYear() - dogumTarihi}dir`
//     // return sonuc
//     return (`${isim} ın yaşı ${new Date().getFullYear() - dogumTarihi}dir`)
// }

// const mesaj1 = yasHesapla("Elif can", 1990)
// console.log(mesaj1);

//* ORNEK4:
//*****************************************************/

// function tekCift(sayi) {
//     return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
// }

// console.log(tekCift(5));
// console.log(tekCift(2));

// //* ORNEK4:
// //*****************************************************/
// const n = +prompt("Bir sayi giriniz:");
// console.log(tekCift(n));

