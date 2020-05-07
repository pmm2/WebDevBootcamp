alert(
  "Este jogo é para duas pessoas, a primeira escolhera um numero sem a segunda ver e depois a segunda terá que adivinha-lo"
);
const number = prompt("Digite o numero");

while (true) {
  const guess = prompt("Tente acertar, digite um numero");

  if (guess > number) {
    alert("Muito alto");
  } else if (guess < number) {
    alert("Muito baixo");
  } else {
    alert("Correto!");
    break;
  }
}
