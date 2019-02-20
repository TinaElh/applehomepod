const light = document.querySelector('.buttonLight')
const tv = document.querySelector('.buttonTV')
const saucisse = document.querySelector ('.buttonWindow')
const picture = document.querySelector ('.home')
const black = document.querySelector ('.black')


light.addEventListener(
    'click', 
    function() {
        if (light.classList.contains("off")) {
            black.style.opacity="0"
            light.classList.remove("off")
        } else {
            black.style.opacity="0.7"
            light.classList.add("off")
        }
    }
)

// deuxième div par dessus boutton en display none
// EventListener black.opacity.0