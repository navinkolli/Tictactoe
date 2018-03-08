let win = false;
let arraylist = ["x", "o"];
let playerx = [];
let playero = [];
let wincombo = [
  // Horizontals
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Verticals
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonals
  [0, 4, 8],
  [2, 4, 6]
];

let count = 1;
let a = document.querySelectorAll(".container div");
// console.log(a);
for (var i = 0; i < 9; i++) {
  a[i].addEventListener("click", setvalues, false);
}

function setvalues(e) {
  var clickedItem = e.target.id;
  if (e.target.innerHTML == "") {
    count++;

    if (count % 2 == 0) {
      e.target.innerHTML = arraylist[0].toUpperCase();
      playerx.push(parseInt(clickedItem));

      if (playerx.length != -1) {
        console.log(playerx);
      }
    } else {
      e.target.innerHTML = arraylist[1].toUpperCase();
      playero.push(parseInt(clickedItem));
      if (playero.length != -1) {
        console.log(playero);
      }
    }

    if (playerx.length >= 3 || playero.length >= 3) {
      windecide(playerx, playero);
    }
  }
}

function windecide(x = [], y = []) {



  console.log(`wher is x \t` + x.sort().join(""));
  console.log(`wher is y \t ` + y.sort().join(""));
 let xplay= x.sort().join("");
let yplay= y.sort().join("");

function comparisionhere (winner)
{

for (var i=0;i<wincombo.length;i++)
{


}
}

}
