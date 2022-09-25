const test = require('./process_variables')

console.log(
    process.env.DB,
    process.env.USER)

process.stderr._write('teste error')