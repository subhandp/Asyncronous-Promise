const axios = require('axios');

//versi menggunakan promise
Promise.all([axios.get('https://jsonplaceholder.typicode.com/posts'), axios.get('https://jsonplaceholder.typicode.com/users')])
    .then((response) => {
        response[0].data.map((v, i) => {
            return response[0].data[i]['user'] = response[1].data.find((j, k) => {
                return v.userId === j.id;
            })
        })

        console.log(response[0].data);
    })
    .catch((err) => {
        console.log('error', err)
    });


//versi menggunakan async/await
const mergeJson = async() => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    return [posts, users];
}

mergeJson()
    .then((response) => {
        response[0].data.map((v, i) => {
            return response[0].data[i]['user'] = response[1].data.find((j, k) => {
                return v.userId === j.id;
            })
        })

        console.log(response[0].data);
    })
    .catch((err) => {
        console.log('error', err)
    });