const gerarNum = (a,b) => {
    return Math.floor(Math.random() * (b - a + 1)) + a
};

for(let i = 0; i < 20; i++) {
    console.log(gerarNum(20,1));
}
