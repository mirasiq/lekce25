
let ukoly = document.querySelectorAll("#obsah li")

for (const ukol of ukoly) {
    ukol.className = "nesplneny"

    let nesplneno_button = document.createElement("button")
    nesplneno_button.innerHTML = "nesplnit"
    ukol.appendChild(nesplneno_button)

    nesplneno_button.addEventListener("click" , () => {
        ukol.className = "nesplneny" 
        })

    let splneno_button = document.createElement("button")
    splneno_button.innerHTML = "splnit"
    ukol.appendChild(splneno_button)

    splneno_button.addEventListener("click" , () => {
    ukol.className = "splneny" 
    })

    let rozpracovano_button = document.createElement("button")
    rozpracovano_button.innerHTML = "rozpracovat"
    ukol.appendChild(rozpracovano_button)
   
    rozpracovano_button.addEventListener("click"  , () => {
        ukol.className = "rozpracovany"
    })


}

let filtr_nesplneno = document.getElementById ("filtr_nesplneno")
let filtr_splneno = document.getElementById ("filtr_splneno")
let filtr_vsechny = document.getElementById ("filtr_vsechny")
let filtr_rozpracovano = document.getElementById ("filtr_rozpracovano")

filtr_splneno.addEventListener("click"  , () => {
    ukol.style.display = ""
  
    for (const element of object) {
        
    }

})

ukol.style.display = "none"