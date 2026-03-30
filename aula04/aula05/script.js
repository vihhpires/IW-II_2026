// // EX 1
// let num = parseFloat(prompt("Digite um número: "));

// if (num % 2 == 0){
//     console.log("o número é par");
// } else {
//     console.log("O número é ímpar");
// }

// // EX 2
// let idade = parseFloat(prompt("Digite sua idade: "))
// if (idade >= 18){
//     console.log("Você é maior de idade")
// }else {
//     console.log("Você é menor de idade")
// }
//exercicio 03

// for (let i = 1; i < 11; i++) {
//     console.log(i);
// }

//exercicio 04

// let i = parseFloat(prompt("Digite um número: "));
// while (i) {
//     console.log(i);
//     i--;
// }

// exercicio 05
// i = prompt("Digite um numero: ");
// for (let m = 1; m < 11; m++){
//     mult = i * m;
//     console.log(mult);
// }

// exercicio 06

// i = prompt("Digite um numero: ");
// for (let s = 0; s <= i; s++){  
//     soma = 0 + s;
//     console.log(soma);
// }

//exercicio 07

// let num = parseInt(prompt("Digite um número:"));
// let ehPrimo = true;

// if (num <= 1) {
//     ehPrimo = false;
// } else {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             ehPrimo = false; // Encontrou divisor, não é primo
//             break;
//         }
//     }
// }

// if (ehPrimo) {
//     console.log(num + " é um número primo.");
// } else {
//     console.log(num + " não é um número primo.");
// }

// exercicio 8
// let user = "ViBella"
// let sen = "vamoRosa"

// let usuario = prompt("Digite your name: ");
// let senha = prompt("Digite a senha: ");

// while (usuario != user && senha != sen) {
//     alert("Senha incorreta! Tente novamente")
//     let usuario = prompt("Digite your name: ");
//     let senha = prompt("Digite a senha: ");
// }
// alert("Login feito com sucesso!")

//exercicio 9
// let total = 0;
// let num = Number(prompt("Digite um número positivo: "));

// while (nume >= 0) {
//   total += num;
//   num = Number(prompt("Digite outro número positivo: "));
// }

// alert("A soma total é " + total);

//exercicio 10
// let secreto = Math.floor(Math.random() * 10) + 1;
// let tentativa = Number(prompt("Adivinhe o número de 1 a 10:"));

// while (tentativa !== secreto) {
//   if (tentativa < secreto) {
//     alert("O número secreto é mais alto.");
//   } else {
//     alert("O número secreto é menor.");
//   }

//   tentativa = Number(prompt("Tente novamente:"));
// }

// alert("Você acertou!");

//exercicio 11
// let num = Number(prompt("Digite um número:"));
// let fatorial = 1;

// for (let i = 1; i <= num; i++) {
//   fatorial *= i;
// }

// alert("O fatorial de " + num + " é " + fatorial);

//exercicio 12
// let nota = Number(prompt("Digite uma nota de 0 a 10:"));

// while (nota < 0 || nota > 10) {
//   alert("Nota errada. Tente novamente.");
//   nota = Number(prompt("Digite uma nota de 0 a 10:"));
// }

// alert("Nota válida: " + nota);

//exercicio 13
// let nota1 = Number(prompt("Digite a primeira nota:"));
// let nota2 = Number(prompt("Digite a segunda nota:"));
// let nota3 = Number(prompt("Digite a terceira nota:"));

// let media = (nota1 + nota2 + nota3) / 3;

// alert("Média: " + media);

// if (media >= 7) {
//   alert("Aprovado!");
// } else {
//   alert("Reprovado!");
// }

//exercicio 14
// let valor = Number(prompt("Digite o valor do saque:"));

// let ced100 = Math.floor(valor / 100);
// valor %= 100;

// let ced50 = Math.floor(valor / 50);
// valor %= 50;

// let ced20 = Math.floor(valor / 20);
// valor %= 20;

// let ced10 = Math.floor(valor / 10);
// valor %= 10;

// let ced5 = Math.floor(valor / 5);
// valor %= 5;

// let ced2 = Math.floor(valor / 2);
// valor %= 2;

// let ced1 = Math.floor(valor / 1);

// alert(
//   "Cédulas:\n" +
//   "100: " + ced100 + "\n" +
//   "50: " + ced50 + "\n" +
//   "20: " + ced20 + "\n" +
//   "10: " + ced10 + "\n" +
//   "5: " + ced5 + "\n" +
//   "2: " + ced2 + "\n" +
//   "1: " + ced1
// );

//exercicio 15
let numero8 = Number(prompt("Digite um número:"));

for (let i = 1; i <= numero8; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
