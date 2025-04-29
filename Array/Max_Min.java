package Array;

import java.util.Arrays;

//link to the question :- https://takeuforward.org/data-structure/find-the-largest-element-in-an-array/

public class Max_Min {
    public static void main(String[] args) {
        int[] a = {4,9,6,5,2,3};
        System.out.println(maxElement(a));
        System.out.println(minElement(a));
//        System.out.println(MaxMinUsingSorting(a));
        int[] b = MaxMinUsingSorting(a);
        System.out.println("min: "+ b[0]);
        System.out.println("max: " + b[1]);
    }

    static int[] MaxMinUsingSorting(int[] a){
        Arrays.sort(a);
        int min = a[0];
        int max = a[a.length-1];

        return new int[] {min,max};
    }
    static int minElement(int[] a) {
        int min = Integer.MAX_VALUE;
        int size = a.length;
        for(int i=0; i<size; i++){
            if(a[i]<min){
                min = a[i];
            }
        }
        return min;
    }

    static int maxElement(int[] a) {
        int max = Integer.MIN_VALUE;
        int size = a.length;
        for(int i=0; i<size; i++){
            if(a[i]>max){
                max = a[i];
            }
        }
        return max;
    }
}
