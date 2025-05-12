let nomes = [];
let nome = "";
while (nome.toLowerCase() !== "sair") {
  nome = prompt("leoa (ou 'sair' para encerrar):");
    if (nome.toLowerCase() !== "sair") {
        nomes.push(nome);
          }
          }
          console.log("Nomes digitados: " + nomes);
