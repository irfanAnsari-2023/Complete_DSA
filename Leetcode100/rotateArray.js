let arr = [1,2,3,4,5,6,7];
let k = 3;

console.log(brute_tempArray(arr,k));
// console.log(better_reversalAlgo(arr,k));


function brute_tempArray(arr,k){
    let n = arr.length;
    let result = [];
    k = k%n
   
    for(let i=n-k; i<n; i++){
        result.push(arr[i])
    }
    
    console.log(result);
    
    for(let i=0; i<=n-k-1; i++){
        result.push(arr[i])
    }

    return result;
}

function better_reversalAlgo(arr,k){
     if (n == 0)
      return;
    k = k % n; // this will solve the prob.
    // if (k > n)
    //   return;
    let n = arr.length;
    // reverse the last k Element, reverse the rest i.e n-k elements and then reverse teh whole array
    reverse(arr, 0, n-k-1) // reverse first n-k ele

    reverse(arr, n-k, n-1); // reverse last k ele

    reverse(arr, 0, n-1); // revers the array
    
    return arr;
}

function reverse(arr, start, end){
    while(start<=end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}