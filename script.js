function a() {
  b();
}

function b() {
  console.log('Hello, from b');
}

a();

// a appelle b et affiche donc le message 'Hello from b 


function countDown(timeleft){
  console.log(timeleft);
  timeleft--;
  
  if (timeleft > 0) {
    return countDown(timeleft);
  }
  
 console.log('Le repas est prêt!');
  return true; 
} 

countDown(10);

//Voit le compteur et voit qu'on sort de l'appel récursif 


const coworkerAges = [48, 24, 35, 22, 41, 39];

function sortNumber(a, b) {
  return a - b;
}

const sortedAges = coworkerAges.sort(sortNumber); 
console.log(sortedAges); 

//[22, 24, 35, 39, 41 , 48]

const displayAges = sortedAges.map((sortedAge) => {
  return '${sortedAge} ans';
});

console.log(displayAges);



//objets 

let planeTrip = new Object();

console.log(planeTrip);

let movie = {};

class Dog {
  constructor(age, name, race, color, goodBoy) {
    this.age = age; 
    this.name = name; 
    this.race = race; 
    this.color = color; 
    this.goodBoy = goodBoy;
  }
}

let myDog = new Dog(3, 'Fluffy', 'Bichon', 'White', true); 


