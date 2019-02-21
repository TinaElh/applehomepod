const buttonCaroussel = document.querySelector ('.carousselBtn')
const sliderImages = document.querySelectorAll ('.imgInterieur img')
const sliderContainer = document.querySelector ('.imgInterieur')
const slides = document.querySelectorAll('.carousselTextCard')
let currentPicture = 0,
    slide



sliderContainer.addEventListener("mouseover", () => {
	clearInterval(slide)
})

buttonCaroussel.addEventListener("click", (e) => {
	e.preventDefault()
    currentPicture++
	if(currentPicture >= sliderImages.length){
        currentPicture = 0
        sliderImages[currentPicture].style.opacity = 1;
        document.querySelector(".carousselTextCard:not(.nonVisible").classList.add("nonVisible")
        slides[currentPicture].classList.remove("nonVisible")
        sliderImages[sliderImages.length-1].style.opacity = 0;
	}else{
        sliderImages[currentPicture].style.opacity = 1;
        document.querySelector(".carousselTextCard:not(.nonVisible").classList.add("nonVisible")
        slides[currentPicture].classList.remove("nonVisible")
        sliderImages[currentPicture-1].style.opacity = 0;
    }
})


