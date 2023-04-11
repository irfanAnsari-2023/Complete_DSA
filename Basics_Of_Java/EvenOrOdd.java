import java.util.Scanner;

public class EvenOrOdd {

	public static void main(String[] args) {
		System.out.println("Hey Just started to push the code ");
        // take the i/p from the user 
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter a num");
        int num = scn.nextInt();

        if(num%2==0){
            System.out.println("Num is even");
        }
        else{
            System.out.println("Num is odd");
        }
        

        scn.close();
	}

}