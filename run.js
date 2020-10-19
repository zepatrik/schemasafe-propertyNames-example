const { validator } = require('@exodus/schemasafe')
const schema = require('./example.schema.json')

try {
    validator(schema, { includeErrors: true })
} catch(e) {
    console.log(e)
    return
}

console.log("compiles successfully")
