const ul = document.querySelector(`.main-box ul`);
const bt = document.querySelectorAll(`.main-box .arrow`);

function scroll(e){
    if(e.target.classList.value== `fa-solid fa-chevron-left` || e.target.classList.value == `arrow left` ){
        console.log(`left`);
        ul.scrollLeft-= (ul.scrollWidth / 6);
    } else if(e.target.classList.value== `fa-solid fa-chevron-right` || e.target.classList.value == `arrow right` ){
        console.log(`right`);
        ul.scrollLeft+= (ul.scrollWidth / 6);
    }
}
bt.forEach((e)=>{e.addEventListener(`click` , scroll)})