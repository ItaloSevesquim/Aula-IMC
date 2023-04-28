function calculaIMC(){
    let peso, altura, resp;
    peso = parseFloat(document.getElementById("Peso").value);
    altura = parseFloat(document.getElementById("Altura").value);

    resp = peso/(altura*altura);

    let classificacao;
    if (resp <= 18.5){
        classificacao = " abaixo do peso";
    }else if (resp <= 24.9){
        classificacao = " levemente acima do peso";
    }else if (resp <= 29.9){
        classificacao = " terminar";
    }


    document.getElementById("resp").innerText = "O seu IMC é: " + resp.toFixed(2) + " a sua classificação é a seguinte:" + classificacao;
}