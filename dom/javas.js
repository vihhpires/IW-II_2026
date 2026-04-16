function mudarTexto() {
    let p = document.getElementById("texto");

    if (p.innerText === "Se deu erro, coloca um console.log()… se resolveu, você é um gênio. Se não, coloca mais.") {
        p.innerText = "Funciona? Então não mexe. — todo programador JavaScript em paz interior";
    } else {
        p.innerText = "Se deu erro, coloca um console.log()… se resolveu, você é um gênio. Se não, coloca mais.";
    }

}

let ativo = false;

function mudarCor() {
    if (ativo) {
        // Azul + rosa (original)
        document.body.style.background = "linear-gradient(135deg, #2193b0, #ff4ecd)";
        ativo = false;
    } else {
        // Salmon + amarelo
        document.body.style.background = "linear-gradient(135deg, salmon, yellow)";
        ativo = true;
    }
}