let nomeHeroi = "Doutor Estranho";
let nivelXP = 80000;

if (nivelXP < 1000) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de Ferro");
} else if (nivelXP >= 1001 && nivelXP <= 2000) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de Bronze");
} else if (nivelXP >= 2001 && nivelXP <= 5000) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de Prata");
} else if (nivelXP >= 6001 && nivelXP <= 7000) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de Ouro");
} else if (nivelXP >= 7001 && nivelXP <= 8000) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de Platina");
} else if (nivelXP >= 8001 && nivelXP <= 9000) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de Ascendente");
} else if (nivelXP >= 9001 && nivelXP <= 10000) {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de Imortal");
} else {
  console.log("O Herói de nome " + nomeHeroi + " está no nível de Radiante");
}
