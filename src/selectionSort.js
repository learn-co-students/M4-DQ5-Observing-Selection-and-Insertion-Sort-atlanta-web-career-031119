function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

function indexOfMinimum(array, startIndex) {
    let minValue = array[startIndex];
    let minIndex = startIndex;

    for(let i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    }
    return minIndex;
};


function selectionSort(arr) {
  for(let i=0; i < arr.length; i++){
    let index = indexOfMinimum(arr, i)
    swap(arr, i, index)
  }
  return arr
}
