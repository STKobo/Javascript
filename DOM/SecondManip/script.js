const lis = document.getElementsByTagName('li')
console.log(lis)
console.log(lis[2].innerText)

const li = document.getElementById('object')
console.log(li)

//const lis = document.getElementsByClassName('document')
//console.log(lis)

//const lis = document.getElementsByName('model')
//console.log(lis)

const object = document.querySelector('#object')
console.log(object)

//const object = document.querySelector('ul li')
//console.log(object)

const lis = document.querySelectorAll('ul li')
console.log(lis)

// On peut mettre à la suite
const element = document.querySelector('div').getElementsByTagName('li')
console.log(element)