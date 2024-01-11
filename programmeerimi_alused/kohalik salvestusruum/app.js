const input = document.querySelector("input")
const h2 = document.querySelector("h2")

// lehe alglaadimisel võta kohalikust salvestusruumist muutuja väärtus
// kui seal midagi ei ole, siis probleemi ei ole, siis jääb h2 tühjaks
h2.innerHTML = localStorage.getItem('muutuja')

input.addEventListener("keyup", display)

function display(){
    // salvesta sisestatud väärtus kohalikku salvestusruumi
    localStorage.setItem('muutuja', input.value)
    // näita sama asja logis
    console.log(localStorage.getItem('muutuja'))
    // näita sama asja ka elemendis h2
    h2.innerHTML = localStorage.getItem('muutuja')
}

// kustutamiseks
// localStorage.removeItem("muutuja")
// localStorage.clear()