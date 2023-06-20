const menu=document.querySelector('.menu');
const menu2=document.querySelector('.menu-navegacion');

// console.log(menu)
// console.log(menu2)

 menu.addEventListener('click',()=>{
    menu2.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu2.classList.contains('spread')  && e.target  != menu2 &&  e.target != menu){
            menu2.classList.toggle("spread")
    }
})