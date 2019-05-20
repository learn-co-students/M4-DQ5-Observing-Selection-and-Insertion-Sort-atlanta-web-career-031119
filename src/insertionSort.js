function insert(array, rightIndex, value) {
    for(let i = rightIndex;
        i >= 0 && array[i] > value;
        i--) {
        array[i + 1] = array[i];
    }
    array[i + 1] = value;
};

function insertionSort(arr) {
  const newArr = []
  for(let i = 0; i < arr.length; i++){
    insert(newArr,i,arr[i])
  }
  return newArr
}
