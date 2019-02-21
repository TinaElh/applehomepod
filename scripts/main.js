const buttonCaroussel = document.querySelector ('.carousselBtn')
const sliderImages = document.querySelectorAll ('.imgInterieur img')
const sliderContainer = document.querySelector ('.imgInterieur')
const sliderText = document.querySelector ('.carousselText2')
let step = -960,
    pos = 1,
    currentPicture = 0,
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
        sliderImages[sliderImages.length-1].style.opacity = 0;
        sliderText[currentPicture].style.opacity = 1;
        sliderText[sliderImages.length-1].style.opacity=0;
	}else{
        sliderImages[currentPicture].style.opacity = 1;
        sliderImages[currentPicture-1].style.opacity = 0;
    }
})


