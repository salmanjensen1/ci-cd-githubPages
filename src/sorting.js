function selectionSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap elements
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Example usage:
const selectionSortResult = selectionSort([64, 25, 12, 22, 11]);
console.log("Selection Sort Result:", selectionSortResult);


function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
const insertionSortResult = insertionSort([64, 25, 12, 22, 11]);
console.log("Insertion Sort Result:", insertionSortResult);


module.exports={
    selectionSort, insertionSort
}