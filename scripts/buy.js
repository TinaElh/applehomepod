console.log('hello world.')

const buySliders = document.querySelectorAll('.buy-slider') 
const paginationButtons = document.querySelectorAll('.display-slider .pagination-button__Button')
const grayButton = document.querySelector('.gray-choice')
const whiteButton = document.querySelector('.white-choice')
const shippingButton = document.querySelector('.shipping-choice')
const shopButton = document.querySelector('.shop-choice')
const homepodChoiceColor = document.querySelector('.buy-slider img')

//Si on clique sur la pagination
for(let n = 0; n < paginationButtons.length; n++)
{   
    console.log(n)

    paginationButtons[n].addEventListener(
        'clic',
        function() {
            console.log('A cliqué')
        }
    );
}

//Si on survole le bouton blanc l'image change en blanc
whiteButton.addEventListener(
    'mouseover',
    function() {
        homepodChoiceColor.src='images/homepod_blanc_cote.png';
    }
);

//Si on survole le bouton gris le pod deviens gris
grayButton.addEventListener(
    'mouseover',
    function() {
        homepodChoiceColor.src='images/homepod_noir_cote.png';
    }
);

//Si on clique sur le choix de couleur gris 
grayButton.addEventListener(
    'click',
    function() {
        sliderMoove(1)  
    }
);

//Si on clique sur le choix de couleur gris 
whiteButton.addEventListener(
    'click',
    function() {
        sliderMoove(1)  
    }
);

//Si on clique sur le choix de livraison
shippingButton.addEventListener(
    'click',
    function() {
        sliderMoove(2)  
    }
);

//Si on clique sur le choix boutique
shopButton.addEventListener(
    'click',
    function() {
        sliderMoove(2)  
    }
);

function sliderMoove(sliderNumber)
{
    //On retire la classe .display-slider
    for(let n = 0; n < buySliders.length; n++)
    {
        buySliders[n].classList.remove('display-slider');
    }

    buySliders[sliderNumber].classList.add('display-slider');
}

