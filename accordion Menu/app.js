'use strict'

const accordionElement = document.querySelector('.accordion');

document.body.style.paddingTop = `${Math.round(window.innerHeight / 3)}px`

accordionElement.addEventListener('click' , accordionHandler)

function accordionHandler(e){
    // if accordion-header clicked
    if(e.target.classList.contains('accordion-header')){
        const accordionOrder = e.target.parentElement.dataset.order;
        const targetAccordionElement = document.querySelector(`[data-order = "${accordionOrder}"]`).querySelector('.accordion-content');
        const targetAccordionComputedHeight = window.getComputedStyle(targetAccordionElement).height.replace('px' , '');
        const allAccordionContents = document.querySelectorAll('.accordion-content');
        const allAccordionHeaders = document.querySelectorAll('.accordion-header');

        // if an accordion section is open and user clicked for open another accordion section , close all 
        allAccordionContents.forEach(item => {
            if(item.style.maxHeight !== 0){
                item.style.maxHeight = '0px';
                allAccordionHeaders.forEach(item => item.classList.remove('active'));
            }
        })
        // show and hide accordion section
        if(Number(targetAccordionComputedHeight) !== 0){
            targetAccordionElement.style.maxHeight = '0px';
            targetAccordionElement.previousElementSibling.classList.remove('active');
        }else{
            targetAccordionElement.previousElementSibling.classList.add('active');
            targetAccordionElement.style.maxHeight = `${targetAccordionElement.querySelector('p').offsetHeight}px`;
        }
        
    }
}