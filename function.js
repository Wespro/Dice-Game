
  var randomN1 = Math.floor(Math.random() *6) +1;

  var randomN2 = Math.floor(Math.random() *6)  +1;

  var images1 ="images/dice" + randomN1 + ".png";
  var images2 ="images/dice" + randomN2 + ".png";


document.querySelector("img.dice1").setAttribute("src", images1);

document.querySelector("img.dice2").setAttribute("src", images2);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function wining(){
    var result = "sotmhing";
  if (randomN1 === randomN2){
  result = "Draw.";
}if (randomN1 > randomN2){
  result = "Player 1 wins.";
}if (randomN2 > randomN1){
  result = "Player 2 wins.";
}
return result;
}
document.querySelector('h1').textContent = wining();
// refresh button
document.querySelector('button').addEventListener("click", function(){
   window.location.reload("Refresh")
})
