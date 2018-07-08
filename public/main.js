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





var card1 = 0;
var card2 = 0;
var card3 = 0;

var cards =

["card1.jpg", "card2.jpeg", "card3.jpeg", "card4.jpeg", "card5.jpeg", "card6.jpeg",
"card7.jpeg", "card8.jpeg", "card9.jpeg", "card10.jpeg", "card11.jpeg", "card12.jpg",
"card13.jpeg", "card14.jpeg", "card15.jpeg", "card16.jpeg", "card17.jpeg", "card18.jpeg",
"card19.jpeg", "card20.jpg", "card21.jpg", "card22.jpeg"]

document.getElementById("button").onclick = function(){


  card1 = cards[Math.floor(Math.random() * cards.length)]
  card2 = cards[Math.floor(Math.random() * cards.length)]
  card3 = cards[Math.floor(Math.random() * cards.length)]

  if (card1 == card2 || card1 == card3){
  card1 = cards[Math.floor(Math.random() * cards.length)]
}else if(card2 == card3){
  card2 = cards[Math.floor(Math.random() * cards.length)]
  }

  document.getElementById("past").src = card1
  document.getElementById("present").src = card2
  document.getElementById("future").src = card3

}
