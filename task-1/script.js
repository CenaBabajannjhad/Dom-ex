// change first p text
document.querySelector('p').textContent = 'First paragraph has been updated!';

// change text all p
document.querySelector('p:nth-child(1)').textContent = 'Paragraph 1'
document.querySelector('p:nth-child(2)').textContent = 'Paragraph 2'
document.querySelector('p:nth-child(3)').textContent = 'Paragraph 3'
// or
document.querySelectorAll('p').forEach((element , index) => {
    element.textContent = `Paragraph ${index + 1}`
})

// add background color to all p
document.querySelectorAll('p').forEach(element => {
    element.style.backgroundColor = 'lightblue'
})