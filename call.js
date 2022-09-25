const test = {
    title: 'call, apply e bind',
    language: 'JavaScript',
};

function print() {
    console.log(`${this.title} in ${this.language}.`);
}

//Necessary to inform the context of this into print function
print.call(test)