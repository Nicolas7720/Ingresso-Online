function comprar() {
  const itens = document.querySelector("#tipo-ingresso").value;
  const quantidade = parseInt(document.querySelector("#qtd").value);
  const qtd = document.querySelector("#qtd").value;

  if (qtd == "" || quantidade == 0) {
    alert("Preencha o campo com uma quantidade maior que 0");
  } else {
    if (itens === "inferior") {
      comprarInferior(quantidade);
    } else if (itens === "superior") {
      comprarSuperior(quantidade);
    } else if (itens === "pista") {
      comprarPista(quantidade);
    }
  }
}
const comprarInferior = (qtd) => {
  let cadeirasInferior = parseInt(
    document.querySelector("#qtd-inferior").textContent
  );
  if (qtd > cadeirasInferior) {
    alert("Não possuimos essa quantidade para Cadeiras Inferior Disponivel");
  } else {
    cadeirasInferior -= qtd;
    document.querySelector("#qtd-inferior").textContent = cadeirasInferior;
    alert("Compra realizada com sucesso");
  }
};
const comprarSuperior = (qtd) => {
  let cadeirasSuperior = parseInt(
    document.querySelector("#qtd-superior").textContent
  );
  if (qtd > cadeirasSuperior) {
    alert("Não possuimos essa quantidade para Cadeiras Superior Disponivel");
  } else {
    cadeirasSuperior -= qtd;
    document.querySelector("#qtd-superior").textContent = cadeirasSuperior;
    alert("Compra realizada com sucesso");
  }
};
const comprarPista = (qtd) => {
  let pista = parseInt(document.querySelector("#qtd-pista").textContent);
  if (qtd > pista) {
    alert("Não possuimos essa quantidade para Pista Disponivel");
  } else {
    pista -= qtd;
    document.querySelector("#qtd-pista").textContent = pista;
    alert("Compra realizada com sucesso");
  }
};
