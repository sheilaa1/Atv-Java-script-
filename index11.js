function ehPrimo(num) {
      if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
              }
                return true;
                }
                console.log(ehPrimo(7)); // Saída: true

