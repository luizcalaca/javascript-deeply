const arr1 = ['a', 'a'];
const arr2 = ['c', 'b'];
console.log(arr1.indexOf('a'))
console.log(arr1.lastIndexOf('a'))
function containsDuplicates(array) {
    const result = array.some(element => {
        if (array.indexOf(element) !== array.lastIndexOf(element)) {
            return true;
        }

        return false;
    });

    return result;
}

console.log(containsDuplicates(arr1)); // 👉️ true