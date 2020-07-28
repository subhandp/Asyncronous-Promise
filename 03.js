let f = async() => {
    for (let i = 1; i <= 3; i++) {
        await setTimeout(() => {
            new Promise((res, rej) => {
                if (i == 3) {
                    resolve('1,2,3')
                }
            }).then((val) => { console.log(val) })
        }, 1000);
    }
}
f();