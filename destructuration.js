let personne = {
    nom: 'Thomas',
    age: 35,
    ville: 'Paris'
}; 

let nom = personne.nom;
let age = personne.age;
let adresse = personne.ville; 

let { nom, age, ville : adresse } = personne;

console.log('nom : ', nom, ' age : ', age, ' adresse : ', adresse);


// l'omission de clés 

let [langage1, langage2, langage3] = ['Javascript', 'Java', 'PHP', 'Go'];
console.log(langage1, langage2, langage3); 


const workers = [
    {name: 'Benjamin', age: 25, nbHour: 35, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
    {name: 'Luc', age: 45, nbHour: 36, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
    {name: 'Marie', age: 23, nbHour: 35, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
    {name: 'Jeanne', age: 36, nbHour: 30, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
    {name: 'Jean', age: 37, nbHour: 35, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}}
  ]

  let alerte = '';
const workerHasNotHour = [];
for (let i = 0; i < workers.length; i++) {
  if (workers[i].nbHour !== 35) {
    // On ajoute le message d'alerte à la variable alerte
    alerte += `${workers[i].alert()} \n`;
  }
}
alert(alerte);