// EXERCICIO 01
//const botao = document.getElementById("botao");
// const campoTexto = document.getElementById("campoTexto");
// const resultado = document.getElementById("resultado");
// botao.addEventListener("click", function() {
//     resultado.textContent = campoTexto.value;
// });

//EXERCICIO 02
// function mostrarSaudacao() {
//     const nome = document.getElementById("nome").value;
//     document.getElementById("resultado").textContent = `Olá, ${nome}!`;
//   }
  
//   document.getElementById("btnMostrar").addEventListener("click", mostrarSaudacao);

//EXERCICIO 03
// function verificarIdade() {
//     const idade = document.getElementById("idade").value;
  
//     if (idade >= 18) {
//       document.getElementById("resultado").textContent = "Maior de idade";
//     } else {
//       document.getElementById("resultado").textContent = "Menor de idade";
//     }
//   }
  
//   document.getElementById("btnVerificar").addEventListener("click", verificarIdade);

//EXERCICIO 04
// function mudarCor() {
//     document.body.style.backgroundColor = "lightblue";
//   }
  
//   document.getElementById("btnCor").addEventListener("click", mudarCor);

//EXERCICIO 05
const botao = document.getElementById("btnModo");

botao.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});