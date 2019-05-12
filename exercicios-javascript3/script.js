function soma (num1, num2) {
  let resultado = num1 + num2;
  console.log(resultado);
}

soma (10, 2);


/* início exercício 2 */

let deuses = ['Aegir', 'Aud', 'Balder'];

document.getElementById("btn").onclick = function() {
  myFunction ();
}

function myFunction () {
  deuses.push("Loki");
  console.log(deuses);
}



/* início exercício 3 */

var deuses2 = ['Aegir', ' Aud', ' Balder', ' Bragi', ' Búri', ' Dag', ' Dellingr'];

for (let deus of deuses2) {
  var ul = document.getElementById("nomes");
  var li = document.createElement('li');
   li.appendChild(document.createTextNode(deus));
    ul.appendChild(li);
}

