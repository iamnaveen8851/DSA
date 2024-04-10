// Given an array a of size N which contains elements from 0 to N-1, you need to find all the elements occurring more than once in the given array.
Return the answer in ascending order.
If no such element is found, return list containing [-1].

// Note: The extra space is only for the array to be returned. Try and perform all operations within the provided array.

```
Example 1:

Input:
N = 4
a[] = {0,3,1,2}
Output:
-1
Explanation:
There is no repeating element in the array. Therefore output is -1



Example 2:

Input:
N = 5
a[] = {2,3,1,2,3}
Output:
2 3
Explanation:
2 and 3 occur more than once in the given array.

```

## Approach

- Create a function inside we'll add the following :
- Take a boolean which wiil only be true when we found the duplicate, initially should be false
- first sort the array in asc order
- run nested loop
  - run a loop i
  - run a loop j which will start its index from i + 1
    - here we'll check if we found a duplicate
      - push the duplicate number occurence into the new array
      - change the boolean value in true
  - outside the loops
    - here we'll check if we found a duplicate
      - here we're setting a `new set` of values
      - else --> if we didn't found duplicate it will return -1
