function findLeaders(arr, n) {
  // take an empty array first to store the whaterver the max number we found as greater than its right side
  let arr1 = [];
  // to store the max number we'll take  variable named max which will be use to store the greater number
  let max = 0;

  // run a loop from n-1 or arr.length-1 till i greater than equal to 0
  for (let i = n - 1; i >= 0; i--) {
    // here we'll check if the number from right side is greater than the max value
    if (arr[i] >= max) {
      // we'll store the greater number in the max variable
      max = arr[i];
      // push the greater number in the arr1
      arr1.push(max);
    }
  }
  // reverse the array so the greater number should be present first in the array

  return arr1.reverse();
}

let output = findLeaders([16, 17, 4, 3, 5, 2], 6);

console.log(output);
