function findEquillibrium(a, n){
    let left = 0;
    let right = n-1
    
    let leftSum = a[left]
    let rightSum = a[right]
    
    if(n === 1){
        return 1
    }
    
    while(left < right){
        if(leftSum < rightSum){
            left++;
            leftSum += a[left]
        }else if(leftSum > rightSum){
            right--;
            rightSum+= a[right];
        }else{
            left++
            right--
            leftSum += a[left]
            rightSum+= a[right];
        }
    }
    
    
    if(leftSum === rightSum){
        let position  = left + 1;
        return position
    }
    
    return -1
}


let output  = findEquillibrium([1,3,5,2,2], 5)

console.log(output);