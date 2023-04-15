/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

function getRandomNumber() {
  const random = +(Math.random() * 100).toFixed(0);
  if (random === 0) return 1;
  return random;
}
reset();      

function miFunc() {
  const inputValue= +document.getElementById('input').value;
  if(inputValue<1||inputValue>100) return alert("Debe introducir un número entre 1 y 100");
  if(inputValue>randomNumber) return alert(`Inténtalo con un número menor.`);
  if(inputValue<randomNumber) return alert(`Inténtalo con un número mayor.`);
  if(inputValue===randomNumber){
      alert(`Bravo, lo has adivinado`);
      reset();
  } 
}
function reset(){
  randomNumber = getRandomNumber();
  console.log(`Número aleatorio ${randomNumber}`);
}