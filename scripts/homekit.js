const light = document.querySelector('.buttonLight')
const tv = document.querySelector('.buttonTV')
const imageTele = document.querySelector('.television')
const volet = document.querySelector ('.buttonWindow')
const imageVolet = document.querySelector ('.voletDown')
const picture = document.querySelector ('.home')
const black = document.querySelector ('.black')


light.addEventListener(
    'click',  
    function() {
        if (light.classList.contains("off")) { // Si le bouton Light n'est pas activé
            black.classList.remove("showed") // Ne pas afficher la div black 
            light.classList.remove("off") // Enlever l'action
        } else {
            black.classList.add("showed") // Sinon montrer la div concernée
            light.classList.add("off")
        }
    }
)

tv.addEventListener(
    'click', 
    function() {
        if (tv.classList.contains("off")) {
            imageTele.classList.remove("showed")
            tv.classList.remove("off")
        } else {
            imageTele.classList.add("showed")
            tv.classList.add("off")
        }
    }
)

volet.addEventListener( 
    'click', 
    function() {
        if (volet.classList.contains("off")) {
            imageVolet.classList.remove("showed")
            volet.classList.remove("off")
        } else {
            imageVolet.classList.add("showed")
            volet.classList.add("off")
        }
    }
)