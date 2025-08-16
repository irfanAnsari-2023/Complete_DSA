# Remove Element (LeetCode 27)

## Problem Statement

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are **not equal** to `val`.

### Requirements

- Modify the array `nums` such that the first `k` elements contain the elements not equal to `val`.
- The remaining elements of `nums` are not important.
- Return `k`.

---

## Example 1

**Input**  
nums = [3,2,2,3], val = 3 nums = [0,1,2,2,3,0,4,2], val = 2

**Output**  
k = 2, nums = [2,2,,] k = 5, nums = [0,1,4,0,3,,,_]

---

# Approaches

## 1. Brute Force Approach

### Idea

- Create a **new array** that stores all elements not equal to `val`.
- Copy them back into the original array `nums`.
- Return the count of these elements.

This approach is straightforward but **uses extra space**.

### Code (JavaScript)

```js
var removeElement = function (nums, val) {
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      temp.push(nums[i]);
    }
  }

  // Copy temp back to nums
  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  return temp.length;
};
```

Complexity

Time: O(n)

Space: O(n) (extra array)

## Optimal Approach (Two-Pointer)

Idea

Use two pointers:

left → iterate through array.

pos → points to the position where the next valid element should go.

If nums[left] !== val, assign it to nums[pos] and increment pos.

At the end, pos will be the number of valid elements (k).

This avoids extra space.

Code (JavaScript)

```js
var removeElement = function (nums, val) {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pos] = nums[i];
      pos++;
    }
  }

  return pos;
};
```

Complexity

Time: O(n)

Space: O(1)

## Swap Approach

```js
var removeElement = function (arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    if (arr[left] === val) {
      if (arr[right] === val) {
        right--;
        continue;
      }
      [arr[left], arr[right]] = [arr[right], arr[left]];
      right--;
    } else {
      left++;
    }
  }

  return right + 1;
};
```

Complexity

Time: O(n)

Space: O(1)

Works fine but less intuitive compared to the clean two-pointer overwrite solution.

```

```
