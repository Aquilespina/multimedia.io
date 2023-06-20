var botones=document.querySelectorAll('.btn-expandir');
var text_expandir=document.querySelectorAll('.texto-expandir');

botones.forEach((elemento,clave)=>{
  elemento.addEventListener('click',() => {
  text_expandir[clave].classList.toggle("abrir-cerrar")
  });
});
