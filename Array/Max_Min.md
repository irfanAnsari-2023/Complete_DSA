
# Maximum and Minimum of an Array Using Minimum Number of Comparisons



Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

## Examples

**Input:** `arr[] = {3, 5, 4, 1, 9}`  
**Output:**  
Minimum element is: 1  
Maximum element is: 9

**Input:** `arr[] = {22, 14, 8, 17, 35, 3}`  
**Output:**  
Minimum element is: 3  
Maximum element is: 35

---

## Approach 1: Maximum and Minimum of an Array (Linear Approach)

To solve the problem of finding the minimum and maximum elements in an array, you can follow these steps:

### Step-by-step

1. Write functions to find the minimum (`setmini`) and maximum (`setmaxi`) values in the array.
2. In the `setmini` function:
    - Initialize a variable (`mini`) to `INT_MAX`.
    - Iterate through the array, and if an element is smaller than the current `mini`, update `mini`.
3. In the `setmaxi` function:
    - Initialize a variable (`maxi`) to `INT_MIN`.
    - Iterate through the array, and if an element is larger than the current `maxi`, update `maxi`.
4. In the main function:
    - Declare an array and its size.
    - Print the result by calling the `setmini` and `setmaxi` functions.

```java
import java.util.Array;

public class MinMaxFinder {
    public static int setmini(int[] A, int N) {
        int mini = Integer.MAX_VALUE;
        for (int i = 0; i < N; i++) {
            if (A[i] < mini) {
                mini = A[i];
            }
        }
        return mini;
    }

    public static int setmaxi(int[] A, int N) {
        int maxi = Integer.MIN_VALUE;
        for (int i = 0; i < N; i++) {
            if (A[i] > maxi) {
                maxi = A[i];
            }
        }
        return maxi;
    }

    public static void main(String[] args) {
        int[] A = { 4, 9, 6, 5, 2, 3 };
        int N = A.length;
        System.out.println("Minimum element is: " + setmini(A, N));
        System.out.println("Maximum element is: " + setmaxi(A, N));
    }
}
```

**Output**  
Minimum element is: 2  
Maximum element is: 9

**Time Complexity**: O(N)  
**Auxiliary Space**: O(1)

---

## Approach 2: Using Sorting

Sort the array and pick the first and last elements.

```java
import java.util.*;

class Pair {
    public int min;
    public int max;
}

class Main {
    static Pair getMinMax(int arr[], int n) {
        Pair minmax = new Pair();
        Array.sort(arr);
        minmax.min = arr[0];
        minmax.max = arr[n - 1];
        return minmax;
    }

    public static void main(String[] args) {
        int arr[] = { 1000, 11, 445, 1, 330, 3000 };
        int arr_size = arr.length;
        Pair minmax = getMinMax(arr, arr_size);
        System.out.println("Minimum element is " + minmax.min);
        System.out.println("Maximum element is " + minmax.max);
    }
}
```

**Output**  
Minimum element is 1  
Maximum element is 3000

**Time Complexity**: O(n log n)  
**Auxiliary Space**: O(1)

---

## Approach 3: Linear Search

```java
public class GFG {
    static class Pair {
        int min;
        int max;
    }

    static Pair getMinMax(int arr[], int n) {
        Pair minmax = new  Pair();
        int i;

        if (n == 1) {
            minmax.max = arr[0];
            minmax.min = arr[0];
            return minmax;
        }

        if (arr[0] > arr[1]) {
            minmax.max = arr[0];
            minmax.min = arr[1];
        } else {
            minmax.max = arr[1];
            minmax.min = arr[0];
        }

        for (i = 2; i < n; i++) {
            if (arr[i] > minmax.max) {
                minmax.max = arr[i];
            } else if (arr[i] < minmax.min) {
                minmax.min = arr[i];
            }
        }

        return minmax;
    }

    public static void main(String args[]) {
        int arr[] = {1000, 11, 445, 1, 330, 3000};
        Pair minmax = getMinMax(arr, arr.length);
        System.out.printf("Minimum element is %d
", minmax.min);
        System.out.printf("Maximum element is %d
", minmax.max);
    }
}
```

**Output**  
Minimum element is 1  
Maximum element is 3000

**Time Complexity**: O(n)  
**Auxiliary Space**: O(1)

---

## Approach 4: Tournament Method

```java
public class GFG {
    static class Pair {
        int min;
        int max;
    }

    static Pair getMinMax(int arr[], int low, int high) {
        Pair minmax = new Pair();
        Pair mml, mmr;
        int mid;

        if (low == high) {
            minmax.max = arr[low];
            minmax.min = arr[low];
            return minmax;
        }

        if (high == low + 1) {
            if (arr[low] > arr[high]) {
                minmax.max = arr[low];
                minmax.min = arr[high];
            } else {
                minmax.max = arr[high];
                minmax.min = arr[low];
            }
            return minmax;
        }

        mid = (low + high) / 2;
        mml = getMinMax(arr, low, mid);
        mmr = getMinMax(arr, mid + 1, high);

        minmax.min = Math.min(mml.min, mmr.min);
        minmax.max = Math.max(mml.max, mmr.max);

        return minmax;
    }

    public static void main(String args[]) {
        int arr[] = { 1000, 11, 445, 1, 330, 3000 };
        Pair minmax = getMinMax(arr, 0, arr.length - 1);
        System.out.printf("Minimum element is %d
", minmax.min);
        System.out.printf("Maximum element is %d
", minmax.max);
    }
}
```

**Output**  
Minimum element is 1  
Maximum element is 3000

**Time Complexity**: O(n)  
**Auxiliary Space**: O(log n)

---

## Approach 5: Comparing in Pairs

```java
public class GFG {
    static class Pair {
        int min;
        int max;
    }

    static Pair getMinMax(int arr[], int n) {
        Pair minmax = new Pair();
        int i;

        if (n % 2 == 0) {
            if (arr[0] > arr[1]) {
                minmax.max = arr[0];
                minmax.min = arr[1];
            } else {
                minmax.min = arr[0];
                minmax.max = arr[1];
            }
            i = 2;
        } else {
            minmax.min = arr[0];
            minmax.max = arr[0];
            i = 1;
        }

        while (i < n - 1) {
            if (arr[i] > arr[i + 1]) {
                if (arr[i] > minmax.max) minmax.max = arr[i];
                if (arr[i + 1] < minmax.min) minmax.min = arr[i + 1];
            } else {
                if (arr[i + 1] > minmax.max) minmax.max = arr[i + 1];
                if (arr[i] < minmax.min) minmax.min = arr[i];
            }
            i += 2;
        }

        return minmax;
    }

    public static void main(String args[]) {
        int arr[] = {1000, 11, 445, 1, 330, 3000};
        Pair minmax = getMinMax(arr, arr.length);
        System.out.printf("Minimum element is %d
", minmax.min);
        System.out.printf("Maximum element is %d
", minmax.max);
    }
}
```

**Output**  
Minimum element is 1  
Maximum element is 3000

**Time Complexity**: O(n)  
**Auxiliary Space**: O(1)
