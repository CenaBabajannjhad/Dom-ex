const container = document.querySelector('.container');
const box = document.querySelector('.box');
let x = 0;
let y = 0;

// key event
window.addEventListener('keydown' , e => {
    boxMovementLogic(e.key.replace('Arrow' , '').toUpperCase())
})
// box logic
function boxMovementLogic(key){
    switch(key){
        case 'UP':
            if(y !== 0) y -= 10
            updateBoxPosition('Y')
        break
        case 'DOWN':
            if(y !== container.offsetHeight - box.offsetHeight) y += 10
            updateBoxPosition('Y')
        break
        case 'LEFT':
            if(x !== 0) x -= 10
            updateBoxPosition('X')
        break
        case 'RIGHT':
            if(x !== container.offsetWidth - box.offsetWidth) x += 10
            updateBoxPosition('X')
        break
    }
}
// update box top and left
function updateBoxPosition(direction){
    if(direction === 'Y'){
        box.style.top = `${y}px`
        
    }else if(direction === 'X'){
        box.style.left = `${x}px`

    }else{
        console.log('wrong argument');
    }
}