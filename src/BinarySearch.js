function BinarySearch(arr, number) {
    let start = 0;
    let end = arr.length - 1;
    let mid = 0;
    let counter = 0;
    while (counter < arr.length) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] == number)
            return mid;
        else if (number < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        counter++;
    }
}
console.log(BinarySearch([2,4,6,8,9,10,11,50,100], 9))