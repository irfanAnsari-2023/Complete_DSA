let arr = [3,3,4]


// console.log(brute(arr));
// console.log(better(arr));
console.log(mooreVotingAlgo(arr));



function brute(arr){
    let n = arr.length;
    let maxCount = 0
    let majorityElement = -1
    for(let i=0; i<arr.length; i++){
       let currentElementCount = 0;
        for(let j=0; j<arr.length; j++){
            if(arr[i] === arr[j]){
                currentElementCount++;
            }
        }
        if(currentElementCount>maxCount && currentElementCount> Math.floor(n/2)){
            majorityElement = arr[i]
        }
    }
    return majorityElement;
}

function brute2(arr){
    // Size of the given array
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Selected element is arr[i]
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            // Counting the frequency of arr[i]
            if (arr[j] === arr[i]) {
                cnt++;
            }
        }

        // Check if frequency is greater than n/2
        if (cnt > Math.floor(n / 2)) {
            return arr[i];
        }
    }

    return -1;
}

function better(arr){
    let n = arr.length;
    let map = new Map();

    for(let i=0; i<n; i++){
        let num = arr[i];
        if(map.has(num)){
            map.set(num, map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }

    for(let [num, count] of map){
        if(count > Math.floor(n/2)){
            return num;
        }
    }
    return -1;
}

function mooreVotingAlgo(arr){
    // declare 2 var- count and majorityElement 
    let n = arr.length;
    let count  = 0;
    let majorityElement = null;

    // if count = 0 then make the curr ele majorityElement, if curr ele = majorityElement then ++, and if not equal then --
    
    for(let i=0; i<n; i++){
        if(count === 0){
            majorityElement = arr[i]
        }
        if(arr[i] === majorityElement){
            count++;
        }else{
            count--;
        }
    }
    return majorityElement;
}