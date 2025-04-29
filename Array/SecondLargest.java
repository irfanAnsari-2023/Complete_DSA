package Array;

import java.util.Arrays;


//link to the question :- https://takeuforward.org/data-structure/find-second-smallest-and-second-largest-element-in-an-array/

public class SecondLargest {
    public static void main(String[] args) {
        int[] a = {1,2,4,7,7,5};
        System.out.println(secondLargestUsingSorting(a));
        System.out.println(secondLargest(a));

    }

    static int secondLargest(int[] a){
        int largest  = Integer.MIN_VALUE;
        int secLargest = Integer.MIN_VALUE;

        for(int i=0; i<a.length-1; i++){
            if(a[i]>largest){
                secLargest = largest;
                largest = a[i];
            }else if(a[i]>secLargest && a[i] != largest){
                secLargest = a[i];
            }
        }
        return  secLargest;
    }
   static int secondLargestUsingSorting(int[] a) {
        int size = a.length;
        if (size < 2) {
            throw new IllegalArgumentException("Array must contain atleast 2 elements");
        }
        Arrays.sort(a);
        int max = a[size - 1];
        for(int i = size-2; i>0; i--){
            if(a[i] != max){
                return a[i];
            }
        }
        // If no second largest found (all elements are same)
        throw new RuntimeException("No second largest element found");
    }
}
