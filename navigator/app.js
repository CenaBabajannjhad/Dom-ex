const navigationLinksParent = document.querySelector('#navigation-bar');
const toTopBtn = document.querySelector('#to-top')

navigationLinksParent.addEventListener('click' , e => {
    navigationLogic(e.target.textContent.toUpperCase());
})
function navigationLogic(target){
    switch(target){
        case 'HOME':
            document.querySelector('#home').scrollIntoView({behavior: "smooth"})
        break;
        case 'ABOUT':
            document.querySelector('#about').scrollIntoView({behavior: "smooth"})
        break;
        case 'SERVICES':
            document.querySelector('#services').scrollIntoView({behavior: "smooth"})
        break;
        case 'CONTACT':
            document.querySelector('#contact').scrollIntoView({behavior: "smooth"})
        break;
    }
}
toTopBtn.addEventListener('click' , () => navigationLogic('HOME'))
window.addEventListener('scroll' , () => {
    console.log(window.scrollY);
  if(window.scrollY > 72){
    document.querySelector('#to-top').style.bottom = '50px';
  }else{
    document.querySelector('#to-top').style.bottom = '-50%';
  }  
})