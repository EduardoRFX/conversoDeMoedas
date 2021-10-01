function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorEmDolar = valorEmRealNumerico / 5.23;
    var elementoValorConvertido = document.getElementById("valorConvertido_1");
    var valorConvertido = "O resultado da conversão para Dolar é $: " + valorEmDolar.toFixed(2);

    elementoValorConvertido.innerHTML = valorConvertido;

}

function Converter_2() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorEmEuro = valorEmRealNumerico / 6.20;
    var elementoValorConvertido = document.getElementById("valorConvertido_2");
    var valorConvertido = "O resultado da conversão para Euro é €: " + valorEmEuro.toFixed(2);

    elementoValorConvertido.innerHTML = valorConvertido;

}

function Converter_3() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorEmLibra = valorEmRealNumerico / 7.25;
    var elementoValorConvertido = document.getElementById("valorConvertido_3");
    var valorConvertido = "O resultado da conversão para Libra é £: " + valorEmLibra.toFixed(2);

    elementoValorConvertido.innerHTML = valorConvertido;

}