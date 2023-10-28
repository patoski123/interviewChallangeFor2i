function countPairsWithSum(arr, X) {
    // we have assumed that the array is sorted


    // Validate input
    if (!Array.isArray(arr) || arr.length < 2) {
        throw new Error('Invalid input: The array must contain at least two elements.');
    }

    let pairCount = 0;
    const seenNumbers = new Set();

    for (let i = 0; i < arr.length; i++) {
        const complement = X - arr[i];

        if (seenNumbers.has(complement)) {
            pairCount += 1;
            seenNumbers.delete(complement); // Ensure each number is used only once
        } else {
            seenNumbers.add(arr[i]);
        }
    }

    return pairCount;
}

// Examples
console.log(countPairsWithSum([3, 4, 5, 6], 1));  // Output: 0
console.log(countPairsWithSum([0, 15, 32, 2000, 15000], 15));  // Output: 1
console.log(countPairsWithSum([1, 1, 10, 32, 41], 42));  // Output: 2
