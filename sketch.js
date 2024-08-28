// fantasia, aventura, drama

// castelo animado, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura

// as avebturas de pi, 10, drama, fantasia, aventura
// homem de ferro, 12, fantasia, aventura
// homem aranha, 12, acao
// o menino que descobriu o vento, 14, drama

let campoIdade;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("5");
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      return "As aventuras de pi";
    }
  } else {
    return "A viagem de chihiro";
  }
}









