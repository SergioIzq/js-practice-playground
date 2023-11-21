let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

console.log("Primer array (foreach)");
meses.forEach(function(mes){
    console.log(mes);
});

console.log("Segundo array (for)");
for(let i=0;i<=meses.length-1;i++){
    console.log(meses[i]);
}