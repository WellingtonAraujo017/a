var botoes = document.querySelectorAll("button");
var correctlyButton = botoes[0];
var moveButton = botoes[1];

moveButton.addEventListener("mouseover", function () {
  var horizontal = Math.floor(Math.random() * 400); // X
  var vertical = Math.floor(Math.random() * 400);   // Y
  moveButton.style.position = "absolute";
  moveButton.style.left = horizontal + "px";
  moveButton.style.top = vertical + "px";
});

correctlyButton.addEventListener("click", function () {
  alert("Resposta Correta! Entre em contato informando a porcentagem do aumento KKKKKK");
});
