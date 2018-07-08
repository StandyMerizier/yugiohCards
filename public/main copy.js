var tarrot1 = 0;
var tarrot2 = 0;
var tarrot3 = 0;

var cards =

["chariot.jpg", "cups.jpg", "cups02.jpg", "cups03.jpg", "cups04.jpg",

"cups05.jpg","cups06.jpg","cups07.jpg","cups08.jpg", "cups09.jpg",

"cups10.jpg", "cups11.jpg", "cups12.jpg", "cups13.jpg", "cups14.jpg",

"death.jpg", "devil.jpg", "emperor.jpg", "empress.jpg", "fool.jpg",

"hangedman.jpg", "hermit.jpg", "hierophant.jpg", "highpriestess.jpg",

"judgement.jpg", "justice.jpg", "lovers.jpg", "magician.jpg", "moon.jpg",

"pentacles.jpg", "pentacles02.jpg", "pentacles03.jpg", "pentacles04.jpg",

"pentacles05.jpg", "pentacles06.jpg", "pentacles07.jpg", "pentacles08.jpg",

"pentacles09.jpg", "pentacles10.jpg", "pentacles11.jpg", "pentacles12.jpg",

"pentacles13.jpg", "pentacles14.jpg", "star.jpg", "strength.jpg", "sun.jpg",

"swords.jpg", "swords02.jpg", "swords03.jpg", "swords04.jpg", "swords05.jpg",

"swords06.jpg", "swords07.jpg", "swords08.jpg", "swords09.jpg", "swords10.jpg",

"swords11.jpg", "swords12.jpg", "swords13.jpg", "swords14.jpg", "temperance.jpg",

"tower.jpg", "wands.jpg", "wands02.jpg", "wands03.jpg", "wands04.jpg", "wands05.jpg",

"wands06.jpg", "wands07.jpg", "wands08.jpg", "wands09.jpg", "wands10.jpg", "wands11.jpg",

"wands12.jpg", "wands13.jpg", "wands14.jpg", "wheeloffortune.jpg", "world.jpg"]

document.getElementById("button").onclick = function(){


  tarrot1 = cards[Math.floor(Math.random() * cards.length)]
  tarrot2 = cards[Math.floor(Math.random() * cards.length)]
  tarrot3 = cards[Math.floor(Math.random() * cards.length)]

  if (tarrot1 == tarrot2 || tarrot1 == tarrot3){
  tarrot1 = cards[Math.floor(Math.random() * cards.length)]
  }else if(tarrot2 == tarrot3){
  tarrot2 = cards[Math.floor(Math.random() * cards.length)]
  }

  document.getElementById("past").src = tarrot1
  document.getElementById("present").src = tarrot2
  document.getElementById("future").src = tarrot3

}
