/*
function mergeSort(arr) {
    const sortedArr = [];
    if (arr.length > 1) {
        const halfLength = Math.floor(arr.length / 2);
        const leftHalf = arr.slice(0, halfLength);
        const rightHalf = arr.slice(halfLength, arr.length);
        mergeSort(leftHalf);
        mergeSort(rightHalf);
    }


}
*/

function merge(arr1, arr2) {
    const sortedArr = [];
    for (let i = 0, j = 0; i < arr1.length; ) {
        if (arr1[i] < arr2[j]) {
            sortedArr.push(arr1[i]);
            i++;
        } else if (j < arr2.length) {
            sortedArr.push(arr2[j]);
            j++;
        } else {
            sortedArr.push(arr1[i])
            i++
        }
        if (i === arr1.length && j < arr2.length) {
            const newArr2 = arr2.slice(j);
            sortedArr.push(...newArr2);
        }
    }
    return sortedArr;
}

const arrA = [1, 2, 3, 40];
const arrB = [2, 4, 90];
console.log(merge(arrA, arrB));