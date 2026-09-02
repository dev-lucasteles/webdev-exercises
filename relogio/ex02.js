function verificarHora() {
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();
    document.getElementById("resultado").innerHTML = "Hora atual: " + hora + ":" + minuto + ":" + segundo;

    if (hora >= 6 && hora < 12) {
        document.body.style.backgroundColor = "rgb(5, 219, 243)"; // Cor de fundo para manhã
        document.getElementById("mensagem").innerHTML = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundColor = "rgb(245, 163, 0)"; // Cor de fundo para tarde
        document.getElementById("mensagem").innerHTML = "Boa tarde!";
    } else {
        document.body.style.backgroundColor = "rgb(0, 40, 80)"; // Cor de fundo para noite
        document.getElementById("mensagem").innerHTML = "Boa noite!";
    }
}

