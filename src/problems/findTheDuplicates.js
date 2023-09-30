//this solutoin is fine when n = m
//when m > n binary search is better O(logn)
function findTheDuplicates(arr1, arr2) { //they are sorted
    let i = 0;
    let x = 0;
    const result = [];
    while (i < arr1.length) {
        if (arr1[i] < arr2[x]) {
            i++;
        } else if (arr1[i] == arr2[x]) {
            result.push(arr1[i]);
            i++;
            x++;
        } else {
            x++
        }
    }
    return result;
}

console.log(findTheDuplicates([7,10,11,12,15],[1,5,7,8,15,18,20,30,40]))
// [7,10,11,12,15]
// [1,5,7,8,15,18,20,30,40]

