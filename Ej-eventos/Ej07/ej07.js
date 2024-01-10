// En la página que puedes construir con este código HTML tienes tres bloques: 
// uno de color rojo otro de color blanco y otro de color azul. 
// Crea un script para que cuando el ratónse mueve desde el bloque rojo al central éste se pongo rojo. Si se mueve desde el azul al central, éste se pondrá azul.
//  Si entra en el bloque desde otro sitio el bloque recuperará el color blanco.

let c2 = document.querySelector("#c2");

c2.addEventListener('mouseenter', pintar); 
function pintar(e){
  let bloque = e.currentTarget;
  let origen = e.relatedTarget;
  if(origen.id  != 'BODY'){
       bloque.style.background = origen.style.background;
      }
  else{
       bloque.style.background = 'white';
      }
}
