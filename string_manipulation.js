let str = "Please locate $where 'locate' occurs! Where";

let match_result = str.match(/where/gi) //gi - global and case insensitive
console.log(match_result)

match_result = (/([a-z])\1+/gi).test(str) //test the pattern exists
console.log(match_result)

match_result = (/[!@#$%^&*(),.?":{}|<>]/g).test(str) //verify special characters
console.log(match_result)


console.log(str.indexOf("locate"))

console.log('Substring: ' + str.substring(0,2))

const repl = str.replace('e','a')
console.log(repl)

console.log('charAt ' + str.charAt(0));

if(str.startsWith('Ple')) {
    console.log('Started with Ple')
}   

if(str.endsWith('s!')) {
    console.log('Ends with s!')
}  

console.log(str.lastIndexOf('!'))

console.log(str.search('where'))