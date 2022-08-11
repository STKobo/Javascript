let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.querySelector('form')
let error = document.getElementById('error')
var regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/

//contrôle du format de l'email
email.addEventListener('input', (event) => {
  if (!regexEmail.test(event.target.value)) {
    error.innerText = 'Le format de l\'email est incorrect'
  } else {
    error.innerText = ''
  }
})

//Mot de passe comporte au moins 8 caractères
password.addEventListener('input', (event) => {
  if (event.target.value.length < 8) {
    error.innerText = 'le mot de passe doit contenir au moins 8 caractères'
  } else {
    error.innerText = ''
  }
})

form.addEventListener('submit', (event) => {
  if (error.innerText !== '') {
    event.preventDefault()
    alert("Le formulaire contient des erreurs et n'a pas été envoyé")
  }
})