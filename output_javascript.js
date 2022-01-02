
const fs = require('fs')


function init_of_field(fld) {
    if ( typeof fld === "string" ) {
        return `""`
    }
    if ( typeof fld === "object" ) {
        if ( Array.isArray(fld) ) {
            return "[]"
        } else {
            return "{}"
        }
    }

    return "false"
}



let data = fs.readFileSync('def-link-package.json').toString()

let def = JSON.parse(data)

let def_lines = ""
let type_name = def.typename
//
if ( def.fields ) {
    //
    type_name = type_name.substr(0,1).toUpperCase() + type_name.substr(1)
    //
    let fields_array = Object.keys(def.fields)
    let field_inits = fields_array.map(fld => {
        let initializer = init_of_field(def.fields[fld])
        return `this.${fld} = ${initializer}`
    })
    let fields = field_inits.join('\n\t')
    //
    if ( (def.role === "base") && (def.inherit === "none") ) {
        
        def_lines = `class ${type_name} {
    constructor() {
        ${fields}
    }
}`
    }
}

console.log(def_lines)