# Rotate array by K elements

Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

Examples:

Example 1:
Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
Output: 6 7 1 2 3 4 5
Explanation: array is rotated to right by 2 position .

Example 2:
Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left
Output: 9 10 11 3 7 8
Explanation: Array is rotated to right by 3 position.

## Brute force approach - Using a temp Array

### For Rotating the Elements to right

    - Step 1: Copy the last k elements into the temp array.

    - Step 2: Shift n-k elements from the beginning by k position to the right

    - Step 3: Copy the elements into the main array from the temp array.

Code:

```js
function rotateToRight(arr, n, k) {
  if (n === 0) return;

  k = k % n;
  if (k > n) return;

  let temp = new Array(k);

  // Copy last k elements into temp
  for (let i = n - k; i < n; i++) {
    temp[i - n + k] = arr[i];
  }

  // Shift remaining elements to the right
  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }

  // Put temp back into front
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }
}

// Example
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 2;
rotateToRight(arr1, arr1.length, k1);
console.log("After Rotating to Right:", arr1);
```

Time Complexity: O(n)

Space Complexity: O(k) since k array element needs to be stored in temp array

### For Rotating the Elements to left

    - Step 1: Copy the first k elements into the temp array.

    - Step 2: Shift n-k elements from last by k position to the left

    - Step 3: Copy the elements into the main array from the temp array.

Code:

```js
function rotateToLeft(arr, n, k) {
  if (n === 0) return;

  k = k % n;
  if (k > n) return;

  let temp = new Array(k);

  // Copy first k elements into temp
  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }

  // Shift remaining elements to the left
  for (let i = 0; i < n - k; i++) {
    arr[i] = arr[i + k];
  }

  // Put temp back into end
  for (let i = n - k; i < n; i++) {
    arr[i] = temp[i - n + k];
  }
}

// Example
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let k2 = 2;
rotateToLeft(arr2, arr2.length, k2);
console.log("After Rotating to Left:", arr2);
```

Time Complexity: O(n)

Space Complexity: O(k) since k array element needs to be stored in temp array

---

## Approach 2- Using Reversal Algo

### For Rotating the Elements to right

    - Step 1: Reverse the last k elements of the array

    - Step 2: Reverse the first n-k elements of the array.

    - Step 3: Reverse the whole array.

Code:

```js
function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateRight(arr, k) {
  let n = arr.length;
  k = k % n; // handle k > n

  // Reverse first n-k elements
  reverse(arr, 0, n - k - 1);

  // Reverse last k elements
  reverse(arr, n - k, n - 1);

  // Reverse whole array
  reverse(arr, 0, n - 1);

  return arr;
}

// Example:
let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log("After rotating right by 2:", rotateRight(arr1, 2));
```

Time Complexity - O(N) where N is the number of elements in an array

Space Complexity - O(1) since no extra space is required

---

### For Rotating the Elements to Left

    - Step 1: Reverse the first k elements of the array

    - Step 2: Reverse the last n-k elements of the array.

    - Step 3: Reverse the whole array.

Code:

```js
function reverse(arr, start, end) {
  while (start <= end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateLeft(arr, k) {
  let n = arr.length;
  k = k % n; // handle k > n

  // Reverse first k elements
  reverse(arr, 0, k - 1);

  // Reverse last n-k elements
  reverse(arr, k, n - 1);

  // Reverse whole array
  reverse(arr, 0, n - 1);

  return arr;
}

// Example:
let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log("After rotating left by 2:", rotateLeft(arr2, 2));
```

Time Complexity - O(N) where N is the number of elements in an array

Space Complexity - O(1) since no extra space is required
