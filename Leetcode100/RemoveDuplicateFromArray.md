# Remove Duplicates from Sorted Array

## Problem Statement

Given a sorted array, the task is to remove the duplicate elements in place such that each unique element appears only once and return the new length `k` of the array with unique elements.

**Input**  
nums = [1,1,2]

**Output**  
 2, nums = [1,2,_]

---

## Solution 1: Brute Force

### Intuition

We can think of a data structure that does not store duplicate elements. A **HashSet** is perfect here because it automatically handles duplicates for us.

### Approach

1. Declare a HashSet.
2. Traverse the array and insert every element into the set.
3. Store the size of the set in a variable `k`.
4. Copy all elements of the set back into the array starting from index `0`.
5. Return `k`.

### Code

```javascript
function removeDuplicatesBruteForce(arr) {
  let set = new Set();
  for (let num of arr) {
    set.add(num);
  }

  let k = set.size;
  let i = 0;
  for (let num of set) {
    arr[i++] = num;
  }

  return k;
}

const arr1 = [1, 1, 2, 2, 2, 3, 3];
const k1 = removeDuplicatesBruteForce(arr1);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k1; i++) {
  console.log(arr1[i]);
}
```

Complexity Analysis

Time Complexity: O(n \* log(n)) + O(n)

Inserting into a set takes O(log n) on average (though in JS Set behaves more like hash → O(1)), plus traversal.

Space Complexity: O(n)

Because of the extra HashSet used.

## Optimal Approach (Two Pointers)

Intuition

We can use two pointers i and j.

Pointer i will keep track of the position of unique elements.

Pointer j will scan through the array.
Whenever we find a new unique element (arr[j] != arr[i]), we increment i and update arr[i].

Approach

Initialize i = 0.

Traverse the array with j starting from 1.

If arr[j] is different from arr[i], increment i and update arr[i] = arr[j].

After traversal, return i + 1 (the count of unique elements).

Code

```js
function removeDuplicates(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

const arr2 = [1, 1, 2, 2, 2, 3, 3];
const k2 = removeDuplicates(arr2);

console.log("The array after removing duplicate elements is:");
for (let i = 0; i < k2; i++) {
  console.log(arr2[i]);
}
```

Complexity Analysis

Time Complexity: O(n)

Single pass through the array.

Space Complexity: O(1)

No extra data structures used.
