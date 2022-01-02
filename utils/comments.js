

module.exports.remove_comments = (str) => {
    let lines = str.split('\n')
    let n = lines.length
    for ( let i = 0; i < n; i++ ) {
        let line = lines[i]
        let offset = line.indexOf('//')
        if ( offset >= 0 ) {
            line = line.substr(0,offset)
            lines[i] = line
        }
    }

    let cleansed = lines.join('\n')
    return cleansed
}