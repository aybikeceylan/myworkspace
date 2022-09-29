//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
    title: "the kramazov brothers",
    authors: "dostoyevski",
    year: 1880,
    getSummary: function () {
        return `${this.title} was written by ${this.authors} ,n ${this.year}`
    }
}
console.log(book1)

const book2 = {
    title: "the lily of the valley",
    authors: "honore de balzac",
    year: 1888,
    getSummary: function () {
        return `${this.title} was written by ${this.authors} ,n ${this.year}`
    }
}
console.log(book2);
console.log(book2.getSummary())

//? Object literals yontemi ile fazla sayida yeni objeler olusturmak oldukca zahmetlidir.
//? Ayrica programcilik yaklasimi acisindan da cok tekrar icerdigi icin uygun degildir (DRY - Dont Repeat Yourself)
//? Cozum: Object Oriented Programming (ES5 and ES6)