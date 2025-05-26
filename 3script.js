let numero=parseInt(prompt(
	"Ingrese el monto de su compra "));
if(numero > 100){
	let total=numero-(numero*10);
	console.log("El valor de su compra es",total);
}else{
	console.log("El valor de su compra es",numero);
}