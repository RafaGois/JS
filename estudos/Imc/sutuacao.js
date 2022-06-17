const situacaoImc = (imc) => {
    if(imc < 10) {
        return "Desnutrição grau V";
    } else if(imc > 10 && imc <= 12.9) {
        return "Desnutrição grau IV";
    } else if(imc > 13 && imc <= 15.9) {
        return "Desnutrição grau III";
    } else if (imc > 16 && imc <= 16.9) {
        return "Desnutrição grau II";
    } else if (imc > 17 && imc <= 18.4) {
        return "Desnutrição grau I";
    } else if (imc > 18.5 && imc <= 24.9) {
        return "Normal";
    } else if (imc > 25 && imc <= 29.9) {
        return "Pré-obesidade";
    } else if (imc > 30 && imc <= 34.5) {
        return "Obesidade grau I";
    } else if (imc > 35 && imc <= 39,9) {
        return "Obesidade grau II";
    } else if (imc > 30) {
        return "Obesidade grau III";
    }
};

export default situacaoImc;