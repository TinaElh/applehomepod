console.log('hello world.')

const buySliders = document.querySelectorAll('.buy-slider') 
const paginationButtons = document.querySelectorAll('.pagination-button__Button')

//Si on clique sur la pagination


function sliderMoove(sliderNumer)
{
    //On redire la classe .display-slider
    for(let n = 0; n <= buySliders; n++)
    {
        buySliders[n].className = "test";
    }
}