let arr = [3,2,2,3];
let value = 3;

console.log(removeElement(arr,value))

function removeElement(arr, val){
    let count = 1;
    let left = 0; 
    let right = arr.length-1;
    // let finalLengthAfterRemovingElement = 0;
    while(left <= right){
        if(arr[left] === val){
            count++;
            if(arr[left] === val && arr[right] === val){
                right--;
            }
        [arr[left], arr[right]] = [arr[right], arr[left]]

        right--;
        }
        left++;
        
            
    }
    // finalLengthAfterRemovingElement = arr.length-count
    return arr.slice(0,right+1);
}