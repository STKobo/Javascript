const colors = ['black', 'white', 'yellow']
const colorsInt = [123, 456, 789]
const pricesPromo = [];

const prices = [10, 20, 30, 40, 50]
for (let index = 0; index < prices.length; index++){
    console.log('Prix Initial', prices[index])
    const initialPrice = prices[index]
    const priceWithPromo = initialPrice / 2
    console.log(initialPrice, priceWithPromo)
    pricesPromo.push(priceWithPromo)
    // pricesPromo[index] = priceWithPromo; 
    
}
console.log("Mes nouveaux prix sont " + pricesPromo)