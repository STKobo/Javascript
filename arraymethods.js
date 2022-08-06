const animals = ['Chien', 'Chat', 'Papillon']; 

animals.push('Renard', 'Poisson', 'Peroquet');

console.log(animals);
console.log('----------');

animals.unshift('Lapin');
console.log(animals);

console.log('----------');

animals.splice(0, 2);
console.log(animals);
