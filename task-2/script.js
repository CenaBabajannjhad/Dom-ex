const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const inputStatusElement = document.querySelector('#input-status');

window.addEventListener('keydown' , (e) => e.key === 'Enter' && fakeFormHandler())
buttonElement.addEventListener('click' , fakeFormHandler);

function fakeFormHandler(){
    // get input value
    let inputValue = fetchInputValue(inputElement);
    // check input value
    if(inputValue && inputValue === "i'm alireza"){
        inputStatusElement.style.color = 'blue';
        inputStatusElement.textContent = 'wellcome alireza';

    }else if(inputValue){
        inputStatusElement.style.color = 'green';
        inputStatusElement.textContent = inputValue;

    }else{
        inputStatusElement.style.color = 'red';
        inputStatusElement.textContent = 'Please enter a value';
    }
    // reset the input value
    resetTheInput(inputElement)
};

// return input value
function fetchInputValue(element){
    return element.value.trim();
}
// reset the input
function resetTheInput(element){
    element.value = null;
}