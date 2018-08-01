## Test JSON Validator
Basado en [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) que utiliza el validador de formato [JSON Schema](https://cswr.github.io/JsonSchema/spec/multiple_types/)

### Instalación
Clonar el repositorio en tu carpeta favorita:
```
git clone https://github.com/cmchecha/test-json-validator.git
```

Instala las dependencias y luego se lanza con node el contenido del archivo index.js
```
$ cd test-json-validator
$ npm install
$ node index
```

Si se desea cambiar el formato del JSON, se debe cambiar la estructura del schema en el archivo schema.js y el json que se validará en el archivo data.js
