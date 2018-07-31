module.exports = {
    "required": true,
    "type": "object",
    "properties": {
        "a": {
            "required": true,
            "type": "number"
        },
        "b": {
            "required": true,
            "type": "string"
        },
        "b2": {
            "required": true,
            "type": "string",
            "format": "email"
        },
        "c": {
            "required": true,
            "type": "boolean"
        },
        "d": {
            "required": true,
            "type": "null"
        },
        "e": {
            "required": true,
            "type": "object",
            "properties": {
                "x": {
                    "required": true,
                    "type": ["number", "string"]
                }
            }
        },
        "f": {
            "required": true,
            "type": "array",
            "minItems": 2,
            "items": {
                "type": "object",
                "required": true,
                "properties": {
                    "id": {
                        "required": true,
                        "type": "number"
                    },
                    "nombre": {
                        "required": true,
                        "type": "string"
                    },
                    "apellidos": {
                        "required": false,
                        "type": "string"
                    }
                }
            }
        },
        "g": {
            "required": true,
            "type": "array",
            "items": {
                "type": "number",
                "required": true
            }
        }
    }
}
