let myp = new Promise((resolve, reject) => {
    let v = setInterval(() => {
        console.log("ok")
        clearInterval(v)
    }, 1000)
    //blah
}).then(() => {
    console.log("done")
})

async function() {
    let v = setInterval(() => {
        console.log("ok")
        clearInterval(v)
    }, 1000)
}

console.log("blah")