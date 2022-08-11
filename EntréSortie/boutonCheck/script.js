var checkbox = document.getElementById('check')
checkbox.addEventListener('change', (event) => {
  alert(event.target.checked) // True si coché, sinon false 
})