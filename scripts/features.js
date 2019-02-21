const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = document.querySelector('.Slidercontainer')
const sliderTexte = document.querySelectorAll('.Slidercontainer')
const step = 960 // definit le décalage
let pos = 0 // définit la position en cours.
let action
let paginationContent = '';//Ici c'est la variable du contenu de .dotPagination
const dotPagination = document.querySelector('.dotPagination') //c'est noeud du .dotPagination

playSlider()

leftButton.addEventListener('click',leftSlide)
rightButton.addEventListener('click',rightSlide)


//Pour n allant de 0 au nombre de texte
for(n=0; n<= sliderTexte.length-1; n++){

  //On ajoute une div à la div .dotPagination
  paginationContent = paginationContent + '<div class="Slider'+ n +'"></div>'
  dotPagination.innerHTML= paginationContent
}


//On récupère les noeuds des div  pagination
const paginationButton0 = document.querySelector('.dot0')
const paginationButton1 = document.querySelector('.dot1')
const paginationButton2 = document.querySelector('.dot2')
const paginationButton3 = document.querySelector('.dot3')
const paginationButton4 = document.querySelector('.dot4')
const paginationButton5 = document.querySelector('.dot5')
const paginationButton6 = document.querySelector('.dot6')
const paginationButton7 = document.querySelector('.dot7')
const paginationButton8 = document.querySelector('.dot8')
const paginationButton9 = document.querySelector('.dot9')
const paginationButton10 = document.querySelector('.dot10')
const paginationButton11 = document.querySelector('.dot11')


paginationButton0.addEventListener('click', function(){ paginationClick(0) })
paginationButton1.addEventListener('click', function(){ paginationClick(1) })
paginationButton2.addEventListener('click', function(){ paginationClick(2) })
paginationButton3.addEventListener('click', function(){ paginationClick(3) })
paginationButton4.addEventListener('click', function(){ paginationClick(4) })
paginationButton5.addEventListener('click', function(){ paginationClick(5) })
paginationButton6.addEventListener('click', function(){ paginationClick(6) })
paginationButton7.addEventListener('click', function(){ paginationClick(7) })
paginationButton8.addEventListener('click', function(){ paginationClick(8) })
paginationButton9.addEventListener('click', function(){ paginationClick(9) })
paginationButton10.addEventListener('click', function(){ paginationClick(10) })
paginationButton11.addEventListener('click', function(){ paginationClick(11) })


function paginationClick(slideNumber)
{
  pos = slideNumber
  setPosition(pos)
}

function leftSlide(){
  pos--
  if(pos<0){
    pos=sliderTexte.length-1
  }
  setPosition(pos)
}

function rightSlide(){
  pos++
  if(pos>=sliderTexte.length){
    pos=0
  }
  setPosition(pos)
}

Slider.addEventListener('mouseover',stopSlider)
Slider.addEventListener('mouseout',playSlider)

rightButton.addEventListener('mouseover',stopSlider)
leftButton.addEventListener('mouseover',stopSlider)


function setPosition(pos)
{
  Slider.style.left = -pos*step+'px' // 960px
}

function stopSlider()
{
  clearInterval(action)
}


function playSlider()
{
  action = setInterval(
    function()
    {
      pos = (pos+1)%sliderTexte.length
      setPosition(pos)
    },
    4500 // toutes les 3 secondes
  )
}
