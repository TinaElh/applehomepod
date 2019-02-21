const buttonCaroussel = document.querySelector ('.carousselBtn')
const sliderImages = document.querySelectorAll ('.imgInterieur img')
const sliderContainer = document.querySelector ('.imgInterieur')
const slides = document.querySelectorAll('.carousselTextCard')
let currentPicture = 0,
    slide



sliderContainer.addEventListener("mouseover", () => {
	clearInterval(slide)
})

buttonCaroussel.addEventListener("click", (e) => { // Action de cliquer sur la flèche
	e.preventDefault()
    currentPicture++ //Lorsqu'on clique, la valeur de currentPicture augmente de 1
	if(currentPicture >= sliderImages.length){ // Si la valeur est supérieure ou égale à la longueur du tableau alors faire les actions suivantes
        currentPicture = 0
        sliderImages[currentPicture].style.opacity = 1; //Augmenter l'opacité de l'image du HomePod en fonction de la position
        document.querySelector(".carousselTextCard:not(.nonVisible").classList.add("nonVisible") // Enlever la classe nonVisibile qui a pour opacity 0 et la remettre
        slides[currentPicture].classList.remove("nonVisible") //Enlever la classe nonVisible
        sliderImages[sliderImages.length-1].style.opacity = 0; // Mettre l'opacité à 0 pour l'image du HomePod lorsqu'une autre est sélectionnée
	}else{ // Sinon, cacher les autres texte/images pas sélectionner
        sliderImages[currentPicture].style.opacity = 1; 
        document.querySelector(".carousselTextCard:not(.nonVisible").classList.add("nonVisible")
        slides[currentPicture].classList.remove("nonVisible")
        sliderImages[currentPicture-1].style.opacity = 0;
    }
})


