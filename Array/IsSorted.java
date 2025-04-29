package Array;

//link to the question :- https://takeuforward.org/data-structure/check-if-an-array-is-sorted/

public class IsSorted {
    public static void main(String[] args) {
        int[] a = {1,2,3,4,5};
        System.out.println(isSorted(a));
        System.out.println(isSortedSingleTraversal(a));
    }

    static boolean isSorted(int[] a){
        int size = a.length;
        for(int i=0; i<size; i++){
            for(int j=i+1; j<size; j++){
                if(a[j] < a[i]){
                    return false;
                }
            }
        }
        return  true;
    }

    static boolean isSortedSingleTraversal(int[] a){
        int size = a.length;
        for(int i=1; i<size; i++){
            if(a[i] < a[i-1]){
                return false;
            }
        }
        return true;
    }
}
