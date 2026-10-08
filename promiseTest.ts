let p = new Promise<number>((res,rej) => {
    setTimeout(() => {
        console.log("p done")
        res(1)
    }, 1000);
}).then((value) => {
    console.log("then 1 value:",value)
    throw new Error
})
.catch((reason) => {
    console.log('err:', reason)
    return 0 // catch返回number，TS不会出现void类型
}).then((value) => {
    console.log("then 2 value:", value+1)
    return value+1
})
