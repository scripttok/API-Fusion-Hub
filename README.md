# API-Fusion-Hub

### uma forma de testar performance de um trecho de código

##### const { performance } = require("perf_hooks");

#### const inicio = performance.now();

#### const fim = performance.now();

#### console.log(`Tempo de execução: ${(fim - inicio).toFixed(3)}ms`);
