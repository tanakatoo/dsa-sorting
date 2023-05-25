function merge(arr1, arr2) {
    //if both lengths are still more than 0
    //compare first value of one array to the next value and take the smallest value to put it in the results array
    let results = []
    let i1 = 0
    let j2 = 0
    while (i1 < arr1.length && j2 < arr2.length) {
        if (arr1[i1] <= arr2[j2]) {
            results.push(arr1[i1])
            i1++
        } else {
            results.push(arr2[j2])
            j2++
        }
    }
    //if one of the array is done, just add the end of the other array to the end
    while (i1 < arr1.length) {
        results.push(arr1[i1])
        i1++
    }
    while (j2 < arr2.length) {
        results.push(arr2[j2])
        j2++
    }
    return results
}

function mergeSort(arr) {
    //check if array length is <=1
    if (arr.length <= 1) return arr

    //if array is larger than 1, break array down into 2 arrays
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    //if they are, then merge the left and right arrays and repeat for all of them
    return merge(left, right)
}

module.exports = { merge, mergeSort };