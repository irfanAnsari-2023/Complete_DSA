# Majority Element Problem

The Majority Element in an array is defined as the element that appears more than ⌊n/2⌋ times, where n is the size of the array.

## Problem Statement

Given an array nums of size n, return the majority element.
It is guaranteed that the majority element always exists in the array.

## Approach 1: Brute Force

Idea:

For each element, count how many times it appears by traversing the entire array.

If the count exceeds ⌊n/2⌋, return that element.

Code:

```js
function brute(nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > Math.floor(n / 2)) {
      return nums[i];
    }
  }
  return -1;
}

// Example
console.log(brute([2, 2, 1, 1, 1, 2, 2])); // Output: 2
```

Complexity:

Time: O(n²)

Space: O(1)

---

## Approach 2: Better (HashMap / Frequency Count)

Idea:

Use a Map (or object) to store the frequency of each element.

Check which element’s frequency exceeds ⌊n/2⌋.

Code:

```js
function better(nums) {
  let n = nums.length;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    let num = nums[i];
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [num, count] of map) {
    if (count > Math.floor(n / 2)) {
      return num;
    }
  }
  return -1;
}

// Example
console.log(better([3, 2, 3])); // Output: 3
```

Explanation of for (const [num, count] of map):

1. A Map stores data as key-value pairs → [num, count].

2. Iterating over it gives each pair, e.g. [3,2] means 3 → 2 occurrences.

3. We check if count > n/2.

Complexity:

Time: O(n)

Space: O(n)

---

## Approach 3: Moore’s Voting Algorithm (Without Verification)

Idea:

1. Assume there is always a majority element.

2. Maintain:
   - count → number of times the current candidate is supported.
   - element → current candidate.
3. Traverse:
   - If count == 0, pick the current number as candidate.
   - If current number == candidate → count++.
   - Else → count--.

Code:

```js
function mooreVoting(nums) {
  let count = 0,
    element = null;

  for (let num of nums) {
    if (count === 0) {
      element = num;
      count = 1;
    } else if (num === element) {
      count++;
    } else {
      count--;
    }
  }
  return element; // Guaranteed majority element exists
}

// Example
console.log(mooreVoting([2, 2, 1, 1, 1, 2, 2])); // Output: 2
```

Dry Run Example: [3,3,4]

- i=0 → count=0 → pick 3, count=1

- i=1 → num=3 == candidate → count=2

- i=2 → num=4 != candidate → count=1
  Result = 3

Complexity:

Time: O(n)

Space: O(1)

---

## Approach 4: Moore’s Voting Algorithm (With Verification)

When to Use:

1. Use this when it’s not guaranteed that a majority element always exists.

2. After finding the candidate, run a second pass to confirm it actually appears > ⌊n/2⌋ times.

Code:

```js
function mooreVotingWithCheck(nums) {
  let count = 0,
    element = null;

  for (let num of nums) {
    if (count === 0) {
      element = num;
      count = 1;
    } else if (num === element) {
      count++;
    } else {
      count--;
    }
  }

  // Verification step
  let cnt1 = 0;
  for (let num of nums) {
    if (num === element) cnt1++;
  }

  if (cnt1 > Math.floor(nums.length / 2)) {
    return element;
  }
  return -1;
}

// Example
console.log(mooreVotingWithCheck([3, 3, 4])); // Output: 3
```
