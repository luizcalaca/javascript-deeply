
const verifySubString = 
(string_first, string_second) => 
{
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   
    let indexes = []
    for (let index = 0; index < string_first.length; index++) {
        if(alphabet.includes(string_first[index])) {
            indexes.push(alphabet.indexOf(string_first[index]))
        }
    }

    let indexes2 = []
    for (let index2 = 0; index2 < string_second.length; index2++) {
        if(alphabet.includes(string_second[index2])) {
            indexes2.push(alphabet.indexOf(string_second[index2]))
        }
    }

    if((indexes.length > indexes2.length)) {
        for (let index = 0; index < indexes2.length; index++) {
            if(indexes2.includes(indexes[index])){
                return "YES"
            }
        }
        return "NO"
    }else{
        for (let index = 0; index < indexes.length; index++) {
            if(indexes.includes(indexes2[index])){
                return "YES"
            }  
        }
        return "NO"
    }
}

console.log(verifySubString("asdf", "o"))