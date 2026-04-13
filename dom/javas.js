function mudarTexto(){
    let p = document.getElementById("texto");

    if(p.innerText === "Esse é o texto original."){
        p.innerText = "O texto foi alterado!";
    } else {
        p.innerText = "Esse é o texto original.";
    }
}

let ativo = false;

function mudarCor(){
    if(ativo){
        // Azul + rosa (original)
        document.body.style.background = "linear-gradient(135deg, #2193b0, #ff4ecd)";
        ativo = false;
    } else {
        // Salmon + amarelo
        document.body.style.background = "linear-gradient(135deg, salmon, yellow)";
        ativo = true;
    }
}