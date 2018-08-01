var _ = require("lodash");

var checkIsArray = function (item) {
    return item instanceof Array
}
var checkIsObject = function (item) {
    return item instanceof Object
}

var errors = false;

var iterateOverJson = function (main_json, another_json) {

    if (checkIsArray(main_json)) {
        //  SI ES UN ARRAY SE ITERA SOBRE EL ARRAY
        for (var index = 0; index < main_json.length; index++) {

            main_object = main_json[index]

            //  SI ALGUN ITEM NO ESTA ORDENADO EN EL ARREGLO PERO SI SE ENCUENTRA
            //  CON LODASH FIND, ENTONCES SE ENVIARA A COMPARACION EL ENCONTRADO
            //  DE LO CONTRARIO, SE ENVIARA EL VALOR QUE CORRESPONDE AL INDEX
            another_object = _.find(another_json, main_json[index])
            // another_object = another_json[index]

            iterateOverJson(main_object, another_object);
        }

    } else {
        //  SI NO ES UN ARRAY, SE ITERA SOBRE CADA LLAVE DEL OBJETO JSON
        for (var key in main_json) {
            var value = main_json[key]

            var another_value = null
            if (another_json) {
                another_value = another_json[key]
            }

            if (checkIsArray(value) || checkIsObject(value)) {
                //  SI ES UN OBJETO O UN ARRAY, SE VUELVE A ITERAR SOBRE EL MISMO OBJETO VALUE
                iterateOverJson(value, another_value)

            } else {

                if (value !== another_value) {
                    //  SI AMBOS VALORES NO SON IDÉNTICOS SE LANZA UN ERROR
                    errors = true;
                    console.log(`Error al validar ${key} con valores distintos: ${value} -> ${another_value}`)
                } else {
                    //  VALORES IDENTICOS, NO SE REGISTRA ERROR
                }

            }
        }

    }
}

var json1 = {
    "a": 1,
    "b": "hola",
    "b2": "cmchecha@gmail.com",
    "c": true,
    "d": null,
    "e": {
        "x": 2
    },
    "f": [
        {
            "id": 3,
            "nombre": "Juan"
        },
        {
            "id": 4,
            "nombre": "Pérez"
        },
        {
            "id": 5,
            "nombre": "Pedro"
        }
    ],
    "g": [1, 2, 3, 4, 5, 6]
}

var json2 = {
    "a": 1,
    "b": "hola",
    "b2": "cmchechaa@gmail.com",
    "c": true,
    "d": null,
    "e": {
        "x": 2
    },
    "f": [
        {
            "id": 4,
            "nombre": "Pérez"
        },
        {
            "id": 3,
            "nombre": "Juan"
        },
        {
            "id": 5,
            "nombre": "Pedro"
        }
    ],
    "g": [1, 2, 3, 4, 5, 6]
}

iterateOverJson(json1, json2)
if (!errors)
    console.log("JSON válido")
