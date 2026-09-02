function verificarIdade() {
    var anoNascimento = document.getElementById("anoNascimento").value;
    var sexo = document.getElementById("sexo").value;

    var dataNascimento = new Date(anoNascimento);

    var hoje = new Date();
    var idade = hoje.getFullYear() - dataNascimento.getFullYear();
    var mes = hoje.getMonth() - dataNascimento.getMonth();
    

    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    if (sexo === "masculino") {
        document.getElementById("resultado").innerHTML = "Detectamos um homem com " + idade + " anos<br>";
    } else if (sexo === "feminino") {
        document.getElementById("resultado").innerHTML = "Detectamos uma mulher com " + idade + " anos<br>";
    } else {
        document.getElementById("resultado").innerHTML = "Idade: " + idade + " anos<br>Sexo: Não especificado";
    }

    

    if (sexo === "vazio" || sexo === "") {
        throw new Error("Erro: Sexo não especificado.");
        window.open("erro.html", "_blank"
        );
    }
}