const ages = [14, 27, 65, 18, 94, 6];

ages.forEach(age => {
    if (age < 18) {
        majority = false
    }
})

console.log(majority); 
console.log('----------');

console.log(ages.every(age => age > 18));
console.log(ages.some(age => age < 18));
// au moins un age supérieur à 18 

console.log('----------');

let movies = [
    {
        title: 'King Kong',
        year: '1963',
        rating: 98,
    },
    {
        title: 'Citizen Kane',
        year: '1941',
        rating: 100,
    },
    {
        title: 'Modern Times',
        year: '1936',
        rating: 100,
    },
    {
        title: 'The wizard of Oz',
        year: '1939',
        rating: 98,
    },
];

const movieTitles = movies.map(movie => {
    return movie.title;
});

console.log(movieTitles); 
console. log('---------');

const cart = [
    {
    designation: 'Pomme',
    unitPrice: 0.85, 
    units: 6,
    },
    {
    designation: 'Chou-fleur',
    unitPrice: 0.97, 
    units: 2,
    },
    {
    designation: 'Orange',
    unitPrice: 1.15, 
    units: 4,
    }
]

console.log(
    cart.reduce((accumulator.currentValue) => accumulator + currentValue.unitPrice * currentValue.units, 0)
);