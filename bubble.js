
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let sorted = false
        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                sorted = true
            } else if (arr[j] == arr[j + 1]) {
                sorted = true
            }


        }
        if (!sorted) {
            break;
        }

    }
    console.log(arr)
    return arr
}

module.exports = bubbleSort;