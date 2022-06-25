import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render( < App / > , document.querySelector('#root'))


/*============ SKILLS TABS ============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContents => {
            tabContents.classList.remove('skills__active')
        })

        target.classList.add('skills__active')

        tabs.forEach(tab => {
            tab.classList.remove('skills__active')
        })

        tab.classList.add('skills__active')
    })
})


/*============ MIXUP FILTER PORTFOLIO ============*/




/*============ PORTFOLIO POPUP============*/
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio__button")) {
        togglePortfolioPopup();
        poftfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function poftfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".portfolio__item-image").src;
    document.querySelector(".details__title").innerHTML = portfolioItem.querySelector(".portfolio__item-title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}