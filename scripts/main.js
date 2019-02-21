const buttonCaroussel = document.querySelector ('.carousselBtn')
const carousselZero = document.querySelector ('.carousselText0')
const carousselPremier = document.querySelector ('.carousselText1')
const carousselDeuxième = document.querySelector ('.carousselText2')
const carousselTroisième = document.querySelector ('.carousselText3')
const sliderImages = document.querySelector ('.imgInterieur')

buttonCaroussel.addEventListener(
    'click', 
    function() {
        if (buttonCaroussel.classList.contains("off")) {
            carousselZero.style.opacity="1"
            carousselPremier.style.opacity="0"
            buttonCaroussel.classList.remove("off")
        } else {
            carousselZero.style.opacity="0"
            buttonCaroussel.classList.add("off")
        }
    }
)