//********SORU 8 **********//

// let fullStack = {
//     languages: ["JavaScript", "React", "HTML"],
//     jira: true,
//     gitHub: true,
//     difficulty: 8,
// }
// for (let i = 0; i < fullStack.languages.length; i++) {
//     console.log(fullStack.languages[i]);
//    }


//*******SORU9  ***********//

// let fullStack = {
//     languages: ["JavaScript", "React", "HTML"],
//     jira: true,
//     gitHub: true,
//     difficulty: 8,
// }

// for (let key in fullStack) {
//     console.log(key);
// }

//*******SORU10  ***********//

const myCar = {
    make: 'ford',
    model: 'Mustang',
    year: 1965,
    color: 'Black'
}

myCar.age = function (current) {
    console.log(current - this.year)
}
myCar.age(2022)

//*******SORU11  ***********//