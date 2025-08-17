let arr = [0,0,1,1,1,1,2,3,3];
console.log(withExtraSpace(arr));
console.log(withMap(arr));
console.log(twoPointer(arr));


function withExtraSpace(arr){
    let  n = arr.length;
    let result = [];
    let count = 1;
    result.push(arr[0]);

    for(let i=1; i<n; i++){
        if(arr[i] === arr[i-1]){
            count++;
        }else{
            count = 1;
        }
        if(count <= 2){
            result.push(arr[i])
        }
    }
    // return result;

    // copy back into arr
    for(let i=0; i<result.length; i++){
        arr[i] = result[i];
    }
    return result.length;
}

function withMap(arr){
    let freq = new Map();
    let result = [];

    for(let t of arr){
        if(!freq.has(t)){
            freq.set(t,1)
            result.push(t)
        }else if(freq.get(t)<2){
            freq.set(t, freq.get(t)+1);
            result.push(t)
        }
    }

    // Copy result back to nums
    for (let i = 0; i < result.length; i++) {
        arr[i] = result[i];
    }

    return result.length;
}

function twoPointer(arr){
    let n = arr.length;
    let i=2;
    
    for(let j=2; j<n; j++){
        if(arr[j] !== arr[i-2]){
            arr[i] = arr[j]
            i++;
        }
    }
    return i;
}