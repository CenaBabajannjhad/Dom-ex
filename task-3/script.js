const addParagraphBtn = document.querySelector('#add-p');
const randomParagraphBtn = document.querySelector('#random-p');
const clearElementsBtn = document.querySelector('#clear-p');
const root = document.querySelector('div');
const randomWords = ['hi' , 'cena' , 'word' , 'random' , 'adel' , 'ya abalfazl' , 'rocket' , 'GG' , 'xD'];


// regular add btn
addParagraphBtn.addEventListener('click' , addParagraphButtonHandler)
function addParagraphButtonHandler(){
    addParagraphElementInRoot(root);
};
// random add btn
randomParagraphBtn.addEventListener('click' , randomParagraphHandler);
function randomParagraphHandler(){
    const randomIndex = Math.floor(Math.random() * randomWords.length);
    addParagraphElementInRoot(root , randomWords.at(randomIndex))
}
// clear elements
clearElementsBtn.addEventListener('click' , clearElementsHandler);
function clearElementsHandler(){
    clearParentChilds(root)
}





// add a Element in root
function addParagraphElementInRoot(place , text = 'new paragraph'){
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    place.appendChild(paragraph);
}
// clear the parent child
function clearParentChilds(parent){
    parent.innerHTML = null;
}