## Given an array A of positive integers. Your task is to find the leaders in the array. An element of array is a leader if it is greater than or equal to all the elements to its right side. The rightmost element is always a leader.

### Example 1:

```
Input:
n = 6
A[] = {16,17,4,3,5,2}
Output: 17 5 2
Explanation: The first leader is 17
as it is greater than all the elements
to its right.  Similarly, the next
leader is 5. The right most element
is always a leader so it is also
included.
```

### Example 2:

```
Input:
n = 5
A[] = {1,2,3,4,0}
Output: 4 0
Explanation: 0 is the rightmost element
and 4 is the only element which is greater
than all the elements to its right.
```

```
You don't need to read input or print anything. The task is to complete the function leader() which takes array A and n as input parameters and returns an array of leaders in order of their appearance.
```

## Approach

- take an `empty array` first to store the whaterver the max number we found as greater than its right side
- to store the max number we'll take variable named `max` which will be use to store the greater number
- run a `loop` `from n-1` or `arr.length-1` `till i greater than equal to 0`
- here we'll `check if the number from right side is greater than the max value`
- we'll `store the greater number in the max variable`
- `push` the` greater number` in the `arr1`
- return -> `reverse the array` so the greater number should be present first in the array


[1 2 3 4 0]
type psuedo code 
1 []
2 max = 0
3 run loop in reverse i == arr.length-1 till i >= 0
if(arr[i] >= max){
    max = arr[i]
    [max]
}

return [].reverse