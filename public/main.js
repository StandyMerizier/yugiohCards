var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash")

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});





var tarrot1 = 0;
var tarrot2 = 0;
var tarrot3 = 0;

var cards =

["img/chariot.jpg", "img/cups.jpg", "img/cups02.jpg", "img/cups03.jpg", "img/cups04.jpg",

"img/cups05.jpg","img/cups06.jpg","img/cups07.jpg","img/cups08.jpg", "img/cups09.jpg",

"img/cups10.jpg", "img/cups11.jpg", "img/cups12.jpg", "img/cups13.jpg", "img/cups14.jpg",

"img/death.jpg", "img/devil.jpg", "img/emperor.jpg", "img/empress.jpg", "img/fool.jpg",

"img/hangedman.jpg", "img/hermit.jpg", "img/hierophant.jpg", "img/highpriestess.jpg",

"img/judgement.jpg", "img/justice.jpg", "img/lovers.jpg", "img/magician.jpg", "img/moon.jpg",

"img/pentacles.jpg", "img/pentacles02.jpg", "img/pentacles03.jpg", "img/pentacles04.jpg",

"img/pentacles05.jpg", "img/pentacles06.jpg", "img/pentacles07.jpg", "img/pentacles08.jpg",

"img/pentacles09.jpg", "img/pentacles10.jpg", "img/pentacles11.jpg", "img/pentacles12.jpg",

"img/pentacles13.jpg", "img/pentacles14.jpg", "img/star.jpg", "img/strength.jpg", "img/sun.jpg",

"img/swords.jpg", "img/swords02.jpg", "img/swords03.jpg", "img/swords04.jpg", "img/swords05.jpg",

"img/swords06.jpg", "img/swords07.jpg", "img/swords08.jpg", "img/swords09.jpg", "img/swords10.jpg",

"img/swords11.jpg", "img/swords12.jpg", "img/swords13.jpg", "img/swords14.jpg", "img/temperance.jpg",

"img/tower.jpg", "img/wands.jpg", "img/wands02.jpg", "img/wands03.jpg", "img/wands04.jpg", "img/wands05.jpg",

"img/wands06.jpg", "img/wands07.jpg", "img/wands08.jpg", "img/wands09.jpg", "img/wands10.jpg", "img/wands11.jpg",

"img/wands12.jpg", "img/wands13.jpg", "img/wands14.jpg", "img/wheeloffortune.jpg", "img/world.jpg"]

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
