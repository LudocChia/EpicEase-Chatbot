let p = new Promise((resovle, rejected) => {
    let result = 1 + 1;
    result = 2
    result === 2 ? resovle('OK') : rejected('Not Ok')
})

p.then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})