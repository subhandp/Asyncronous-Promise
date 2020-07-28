const fs = require('fs')

new Promise((resolve, reject) => {
        fs.readdir('/', (err, filename) => {
            if (err) {
                reject(err);
            } else {
                resolve(filename);
            }
        })
    })
    .then((response) => {
        console.log('res', response)
    })
    .catch((err) => {
        console.log('error', err)
    })