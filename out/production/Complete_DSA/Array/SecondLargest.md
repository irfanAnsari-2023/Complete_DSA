# Find Second Smallest and Second Largest Element in an Array

### Problem Statement
Given an array, find the second smallest and second largest element in the array. Print `-1` in the event that either of them doesn’t exist.

---

### Examples

**Example 1:**  
Input: `[1, 2, 4, 7, 7, 5]`  
Output:  
Second Smallest: 2  
Second Largest: 5  
Explanation: The elements are as follows 1,2,4,5,7,7. Hence, second largest is 5 and second smallest is 2.

**Example 2:**  
Input: `[1]`  
Output:  
Second Smallest: -1  
Second Largest: -1  
Explanation: Only one element is present. No second smallest or second largest exists.

---

### Brute Force Approach

**Solution 1: (Brute Force)**  
_This approach only works if there are no duplicates._

**Intuition:**  
Sort the array. First element will be smallest, last will be largest. Second from start is second smallest, and second from end is second largest.

**Approach:**
- Sort the array.
- Return the element at index 1 as second smallest.
- Return the element at index `n-2` as second largest.

```java
import java.io.*;
import java.util.Arrays;

class Test {
    static private void getElements(int[] arr, int n) {
        if (n == 0 || n == 1) {
            System.out.println(-1);
            System.out.println(-1);
            return;
        }
        Arrays.sort(arr);
        int small = arr[1];
        int large = arr[n - 2];
        System.out.println("Second smallest is " + small);
        System.out.println("Second largest is " + large);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 6, 7, 5};
        int n = arr.length;
        getElements(arr, n);
    }
}
```

**Time Complexity:** O(N log N)  
**Space Complexity:** O(1)

---

### Better Approach

**Solution 2: (Better Solution)**

**Intuition:**  
Avoid sorting the array. Traverse the array twice: first to find min and max, then to find second smallest and second largest.

**Approach:**
1. Find the smallest and largest element in the first traversal.
2. Find elements just greater than the smallest and just smaller than the largest in the second traversal.

```java
import java.io.*;
import java.util.Arrays;

class Test {
    static private void getElements(int[] arr, int n) {
        if (n == 0 || n == 1) {
            System.out.println(-1);
            System.out.println(-1);
            return;
        }
        int small = Integer.MAX_VALUE;
        int second_small = Integer.MAX_VALUE;
        int large = Integer.MIN_VALUE;
        int second_large = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            small = Math.min(small, arr[i]);
            large = Math.max(large, arr[i]);
        }
        for (int i = 0; i < n; i++) {
            if (arr[i] < second_small && arr[i] != small) {
                second_small = arr[i];
            }
            if (arr[i] > second_large && arr[i] != large) {
                second_large = arr[i];
            }
        }

        System.out.println("Second smallest is " + second_small);
        System.out.println("Second largest is " + second_large);
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 6, 7, 5};
        int n = arr.length;
        getElements(arr, n);
    }
}
```

**Time Complexity:** O(N)  
**Space Complexity:** O(1)

---

### Optimal Approach

**Solution 3: (Best Solution)**

**Intuition:**  
Use only one traversal and smart comparisons to update second smallest/largest on the go.

**Approach:**
- Use four variables: `small`, `second_small`, `large`, `second_large`
- Traverse once and update accordingly.

```java
import java.io.*;

class Test {
    static private int secondSmallest(int[] arr, int n) {
        if (n < 2) return -1;

        int small = Integer.MAX_VALUE;
        int second_small = Integer.MAX_VALUE;

        for (int i = 0; i < n; i++) {
            if (arr[i] < small) {
                second_small = small;
                small = arr[i];
            } else if (arr[i] < second_small && arr[i] != small) {
                second_small = arr[i];
            }
        }
        return (second_small == Integer.MAX_VALUE) ? -1 : second_small;
    }

    static private int secondLargest(int[] arr, int n) {
        if (n < 2) return -1;

        int large = Integer.MIN_VALUE;
        int second_large = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            if (arr[i] > large) {
                second_large = large;
                large = arr[i];
            } else if (arr[i] > second_large && arr[i] != large) {
                second_large = arr[i];
            }
        }
        return (second_large == Integer.MIN_VALUE) ? -1 : second_large;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 7, 7, 5};
        int n = arr.length;
        int sS = secondSmallest(arr, n);
        int sL = secondLargest(arr, n);
        System.out.println("Second smallest is " + sS);
        System.out.println("Second largest is " + sL);
    }
}
```

**Time Complexity:** O(N) (Single pass)  
**Space Complexity:** O(1)

