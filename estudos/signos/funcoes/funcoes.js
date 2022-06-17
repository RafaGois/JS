const verificaDataRange = (data, DataInicio, DataFim, tipoComparacao) => {
    if (tipoComparacao == "and") {
        return (data >= DataInicio && data <= DataFim);
    } else if (tipoComparacao == "or") {
        return (data >= DataInicio || data <= DataFim);
    }
};

const retornaSigno = (signos, data) => {
    var ano = data.getFullYear();

    for (var signo of signos) {

        var dataInicioSigno = new Date(ano + "-" + signo["DataInicio"] + " 00:00:00");
        var dataFimSigno = new Date(ano + "-" + signo["DataFim"] + " 23:59:59");

        var tipo_comparacao = signo["DataInicio"] == " 12-22" ? "or" : "and";

        if(verificaDataRange(data,dataInicioSigno,dataFimSigno,tipo_comparacao)) {
            return signo["Nome"]
        }
    }
};

export default retornaSigno;