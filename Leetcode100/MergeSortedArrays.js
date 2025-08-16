let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
console.log(mergeSortedArray(nums1,nums2))

function mergeSortedArray(arr1, arr2){
    let arr3 = arr1.concat(arr2);
    let result = [];
    for(let i=0; i<arr3.length; i++){
        if(arr3[i] === 0){
            continue;
        }
        result.push(arr3[i])
    }
    return result.sort((a,b)=> a-b);
}