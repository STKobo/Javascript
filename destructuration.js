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

