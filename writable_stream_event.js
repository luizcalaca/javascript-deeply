const stream = require('stream');

const writable = new stream.Writable({

    write: function (chunk, encoding, next) {
        console.log(chunk.toString());
        next();
    }
});

writable.write('hi');
writable.end();

writable.on('finish', function () {
    console.log("Write is completed.");
});