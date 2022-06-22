let testArr = [1, 2, 3, 4, 5];

function bubbleSort(arr) {
  let result = Array.from(arr);

  for (let i = 0; i < result.length; i++) {
    for (let j = 0, temp; j < result.length - i - 1; j++) {
      if (result[j] < result[j + 1]) {
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

console.log(bubbleSort(testArr), "with bubble sort");

testArr.sort((a, b) => b - a);

console.log(testArr, "with .sort");
