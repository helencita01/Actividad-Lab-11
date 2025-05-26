let numero = Math.floor(Math.random() * 10)+1;
let adivina = prompt("Adivina un numero entre 1 y 10: ");
if(adivina==numero){
	console.log("Felicidades !! adivinaste el numero !");
}else{
	console.log("Lo siento, el numero era " ,numero);
}
