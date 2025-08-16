# Merge Sorted Array (LeetCode 88)

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums2` into `nums1` as one sorted array.

The final sorted array should not be returned, but instead stored inside the array `nums1`.  
To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored.  
`nums2` has a length of `n`.

---

## Example 1

**Input:**
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

**Output:**
[1,2,2,3,5,6]

---

## Brute Force Solution

### Solution:

In the question, it is clearly stated that the given two arrays are sorted. Based on this we can try a simple merge approach using extra space.

This approach is not the exact solution according to the question because it uses **extra space**, but it helps in understanding the optimal one.

---

### Approach:

1. Create a third array `arr3[]` of size `m + n`.
2. Use two pointers:
   - `left` → start of `nums1`
   - `right` → start of `nums2`
3. Compare elements:
   - If `nums1[left] < nums2[right]`: push `nums1[left]` to `arr3`, move `left++`.
   - If `nums2[right] < nums1[left]`: push `nums2[right]` to `arr3`, move `right++`.
   - If equal: push either, move one pointer.
4. If one array ends, append the remaining elements of the other array.
5. Copy the sorted result back into `nums1`.

---

### Intuition:

Since both arrays are already sorted, using the **two-pointer technique** guarantees that the third array will be sorted. Then we simply fill back into `nums1`.

---

### Dry Run:

nums1 = [1,4,8,10], m = 4
nums2 = [2,3,9], n = 3

- Compare 1 and 2 → take 1 → arr3 = [1]
- Compare 4 and 2 → take 2 → arr3 = [1,2]
- Compare 4 and 3 → take 3 → arr3 = [1,2,3]
- Compare 4 and 9 → take 4 → arr3 = [1,2,3,4]
- Compare 8 and 9 → take 8 → arr3 = [1,2,3,4,8]
- Compare 10 and 9 → take 9 → arr3 = [1,2,3,4,8,9]
- Take 10 → arr3 = [1,2,3,4,8,9,10]

Final merged array: `[1,2,3,4,8,9,10]`

---

### Code (Brute Force):

```javascript
var merge = function (nums1, m, nums2, n) {
  let arr3 = [];
  let i = 0,
    j = 0;

  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      arr3.push(nums1[i]);
      i++;
    } else {
      arr3.push(nums2[j]);
      j++;
    }
  }

  while (i < m) {
    arr3.push(nums1[i]);
    i++;
  }

  while (j < n) {
    arr3.push(nums2[j]);
    j++;
  }

  // Copy back into nums1
  for (let k = 0; k < m + n; k++) {
    nums1[k] = arr3[k];
  }
};
```

---

## Optimal Solution (O(m + n), In-Place)

Approach:

We avoid extra space by filling nums1 from the back:

Use three pointers:

i = m - 1 → last valid element in nums1

j = n - 1 → last element in nums2

k = m + n - 1 → last index in nums1

While j >= 0:

If i >= 0 && nums1[i] > nums2[j] → place nums1[i] at nums1[k], decrement i.

Else → place nums2[j] at nums1[k], decrement j.

Always decrement k.

Done — merged in place.

Intuition:

Since nums1 has enough trailing space, we can safely fill from the end without overwriting the valid initial elements.

Dry Run:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3

Compare 3 vs 6 → put 6 → [1,2,3,0,0,6]

Compare 3 vs 5 → put 5 → [1,2,3,0,5,6]

Compare 3 vs 2 → put 3 → [1,2,3,3,5,6]

Compare 2 vs 2 → put 2 → [1,2,2,3,5,6] ✅

Code (Optimal):

```javascript
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // pointer for nums1
  let j = n - 1; // pointer for nums2
  let k = m + n - 1; // fill position in nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};
```

⏱️ Complexity Analysis
Approach Time Complexity Space Complexity
Brute Force O(m + n) O(m + n)
Optimal O(m + n) O(1)

✅ Use the brute force solution to understand merging.
✅ Use the optimal solution in practice since it is in-place and meets the problem’s requirements.

```

```

```

```
