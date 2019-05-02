let idadeIdoso = 60;
let idadeCrianca = 12;
let ingressoInteira = 50;
let ingressoMeia = 25;
let idadeUsuario = 67;

if (idadeUsuario <= idadeCrianca || idadeUsuario >= idadeIdoso) {
    console.log("O valor do seu ingresso é " + ingressoMeia)
} else {
    console.log("O valor do seu ingresso é " + ingressoInteira)
}

/* fim do exercício 3 */


/* início do exercício 4 */

let sorvetes = ["creme", "chocolate", "morango", "flocos"]

for (let i = 0; i < sorvetes.length; i++) {
    console.log("eu vou tomar sorvete de " + sorvetes[i]);
}
