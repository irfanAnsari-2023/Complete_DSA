let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(brute(arr));

function brute(arr) {
  let set = new Set(arr);
  let uniqueArr = Array.from(set);
  for (let i = 0; i < uniqueArr.length; i++) {
    arr[i] = uniqueArr[i];
  }
  return uniqueArr.length;
}

function better(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
