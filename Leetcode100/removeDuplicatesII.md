# Remove Duplicates from Sorted Array II

## 👉 Problem Statement:

You are given a sorted array nums, remove duplicates in-place such that each unique element appears at most twice. The relative order of elements should be kept the same.

Return the new length of the array after removing the extra duplicates.

## Brute Force Approach

- Since the array is sorted, duplicates will appear consecutively.

- We can use a frequency counter (like a Map) to count occurrences.

- Then build a new array keeping only at most 2 occurrences of each element.

Code (Brute Force)

```js
function removeDuplicatesBrute(nums) {
  let freq = new Map();
  let result = [];

  for (let num of nums) {
    if (!freq.has(num)) {
      freq.set(num, 1);
      result.push(num);
    } else if (freq.get(num) < 2) {
      freq.set(num, freq.get(num) + 1);
      result.push(num);
    }
  }

  // Copy result back to nums
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }

  return result.length;
}

// Example
let nums1 = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicatesBrute(nums1)); // Output: 5
console.log(nums1.slice(0, 5)); // [1,1,2,2,3]
```

---

🕒 Time Complexity: O(n)

🛠 Extra Space: O(n) (because of extra result array)

## Better Approach (with Extra Array)

👉 Idea

- Since the array is sorted, duplicates are consecutive.

- We traverse once and add elements into a new array, but only allow at most 2 occurrences.

- Finally, copy that back into the original array.

- This reduces complexity vs. brute force (no need for map/frequency counter).

✅ Code (Better Approach – Extra Array)

```js
function removeDuplicatesBetterExtra(nums) {
  let n = nums.length;
  if (n <= 2) return n; // Already valid

  let result = [];
  let count = 1;

  result.push(nums[0]); // first element always included

  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
      count++;
    } else {
      count = 1; // reset for new element
    }

    if (count <= 2) {
      result.push(nums[i]);
    }
  }

  // Copy back into nums
  for (let i = 0; i < result.length; i++) {
    nums[i] = result[i];
  }

  return result.length;
}

// Example
let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicatesBetterExtra(nums)); // Output: 5
console.log(nums.slice(0, 5)); // [1,1,2,2,3]
```

---

🕒 Complexity

Time Complexity → O(n) (single pass + copying)

Space Complexity → O(n) (extra array)

## Better Approach (Two Pointer Technique)

- Since the array is sorted, we can directly decide how many duplicates to allow.

- Keep a pointer i that tells the position of the next valid element.

- Traverse array with j:

  - If i < 2, always add element (first 2 elements are always valid).

  - Else check: if nums[j] != nums[i-2] → valid (not more than 2 duplicates), so place it.

Code (Better Approach)

```js
function removeDuplicatesBetter(nums) {
  let n = nums.length;
  if (n <= 2) return n; // already valid

  let i = 2; // start placing from index 2
  for (let j = 2; j < n; j++) {
    if (nums[j] !== nums[i - 2]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

// Example
let nums2 = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicatesBetter(nums2)); // Output: 5
console.log(nums2.slice(0, 5)); // [1,1,2,2,3]
```

---

🕒 Time Complexity: O(n)

🛠 Extra Space: O(1) (in-place) ✅
