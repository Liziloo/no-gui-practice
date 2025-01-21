function fibs(n) {
    const fibArray = [0];
    if (n === 1) return fibArray;
    let f = 1;
    for (let i = 1; i < n; i++) {
        fibArray.push(f);
        f += fibArray[fibArray.length - 2];
    }
    return fibArray;
}

const fibArray = [0];
let f = 1;
function fibsRec(n) {
    if (n < 2) {return fibArray};
    fibArray.push(f);
    f += fibArray[fibArray.length - 2];
    return fibsRec(n - 1);
}

console.log(fibsRec(8));