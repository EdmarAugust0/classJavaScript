function criarPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        altura: a,
        peso: p,
        get nomeCompleto() {
            return(`${nome} ${sobrenome}`)
        },
        get IMC(){
            //tofixed serve para deixar com uma casa decimal. Se colocamos 2 no lugar do 1, irá ter 2 casas.
            const massaCorporal = (p / (a * a)).toFixed(1);

            let classificacao = ""

            if(massaCorporal < 18.5) {
                classificacao = "abaixo do peso"
            }if(massaCorporal > 18,5 && massaCorporal < 25) {
                classificacao = "com o peso normal"
            }if(massaCorporal > 25 && massaCorporal < 30) {
                classificacao = "acima do peso"
            }if(massaCorporal > 30) {
                classificacao = "com Obesidade"
            }
        }
    }
}

const p1 = criarPessoa("Edmar", "Augusto", 1.70, 58)



console.log(`${p1.nomeCompleto} seu IMC é: ${p1.massaCorporal}, ou seja, você está ${p1.classificacao}.`);

