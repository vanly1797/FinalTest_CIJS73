//Test 1:
function adjacentElementsProduct(inputArray) {
    let max = 0, result = 0, i = 0;
    for (i; i < inputArray.length; i++) {
        result = inputArray[i] * inputArray[i + 1];
        if (result > max)
            max = result;
        else
            max;
        result = 0;
    }
    return max
}

console.log(adjacentElementsProduct([2, 3, -5, -2, 4]));
// console.log(adjacentElementsProduct([-3, 5, 5, 6, -8]));


//Test 2:
function alternatingSums(a) {
    let result = [0, 0];
    let i = 0
    for (i; i < a.length; i++) {
        if (i % 2)
            result[1] += a[i];
        else
            result[0] += a[i];
    }
    return result
}

console.log(alternatingSums([60, 40, 55, 75, 64]));
// console.log(alternatingSums([12, 25, 30, 45, 25]));