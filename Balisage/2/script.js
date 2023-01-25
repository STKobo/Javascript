const age = prompt ("Quel âge avez-vous ? ")
console.log(age)
console.log("age en numero Int : ", parseInt(age))
console.log("age en numero float : ", parseFloat(age))
console.log(123456);

const isANumber = isNaN(age)
console.log('isNotANumber', isNotANumber)

if (isNaN(age)) {
    console.log('Pas un nombre')
} else if (age < 18){
    console.log("Est mineur")
} else {
    console.log("Est majeur")
}