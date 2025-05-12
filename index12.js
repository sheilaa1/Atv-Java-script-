function fatorial(num) {
      if (num === 0 || num === 1) return 1;
        let resultado = 1;
          for (let i = 2; i <= num; i++) {
              resultado *= i;
                }
                  return resultado;
                  }
                  console.log(fatorial(5)); // Saída: 120
