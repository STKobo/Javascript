const clic = () => {
    console.log("Pikachu")
}

// récupérer un élément html
const myButton = document.querySelector("#myButton")
//myButton.addEventListener('evenement ecoute', 'fonction')
myButton.addEventListener('click', clic)



const buttonData = document.querySelector("[data-myButton]")
console.log(buttonData)

buttonData.addEventListener("mouseenter", () => {
    console.log("mouseEnter")
})

const dots = document.querySelectorAll("[data-dot]")
const span = document.querySelector("[data-number]")
console.log(dots)
dots.addEventListener("click", clic)
for (let i = 0 ; i < dots.length ; i++) {
    dots[index].addEventListener("click", (event) => {
        const clickDot = event.target
        const number = clickDot.getAttribute("data-dot")
        console.log("click dot", number)
        mySpan.textContent = number
    })
}

const reset = document.querySelector("[data-reset]")
reset.addEventListener("click", () => {
    mySpan.innerHTML = ""
})
