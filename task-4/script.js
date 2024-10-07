const listItemsElement = document.querySelectorAll("li");
const showListItemContentPlace = document.querySelector("#show-li-content");
const resetListItemsContent = document.querySelector('#reset'); 

listItemsElement.forEach((element) => {
  // make li cursor style pointer
  element.style.cursor = "pointer";
  // when li cliked , give target textContent and show it in div
  element.addEventListener("click", (e) => {
    showListItemContentPlace.textContent = e.target.textContent;
  });
  // when mouse hover on a li add lightblue background
  element.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "lightblue";
  });
  // when mouse leave the li lightblue background removed
  element.addEventListener("mouseleave", (e) => {
    e.target.style.backgroundColor = null;
  });
});

resetListItemsContent.addEventListener('click' , () => {
    listItemsElement.forEach(element => {
        element.textContent = null;
    })
})