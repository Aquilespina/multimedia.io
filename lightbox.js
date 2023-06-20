const imagenes = document.querySelectorAll('.img-galeria')
const imagenLigth = document.querySelector('.agregar-imagen')
const contenedorLigth = document.querySelector ('.imagen-ligth')
const closeLight = document.querySelector('.close')
const menu1=document.querySelector('.menu');

imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLigth.addEventListener('click',(e)=>{
    if(e.target !== imagenLigth){
        contenedorLigth.classList.toggle('show')
        imagenLigth.classList.toggle('showImage')
        menu1.style.opacity = '1';
    }
})

const aparecerImagen = (imagen)=>{
    imagenLigth.src=imagen;
    contenedorLigth.classList.toggle('show')
    imagenLigth.classList.toggle('showImage')
    menu1.style.opacity = '0';
}
