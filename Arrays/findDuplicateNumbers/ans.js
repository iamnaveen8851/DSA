function findDuplicate(arr) {
// take a boolean which wiil only be true when we found the duplicate, initially should be false
  let found = false;
//   Take a new empty array that will contain the only duplicate numbers 
  let newArr = [];
//   first sort the array in asc order 
  let arr1 = arr.sort((a, b) => {
    return a - b;
  });


//   run a loop i 
  for (let i = 0; i < arr1.length; i++) {
    // run a loop j which will start its index from i + 1 
    for (let j = i + 1; j <= arr1.length; j++) {
        // here we'll check if we found a duplicate
      if (arr1[i] === arr1[j]) {
        // push the duplicate number occurence into the new array
        newArr.push(arr1[i]);
        // change the boolean value in true 
        found = true;
      }
    }
  }


//   here we'll check if we found a duplicate
  if (found) {
    // return [...new Set(newArr)] // here we're setting a new set of values
    let unique = new Set(newArr);
     
     let arr2 = Array.from(unique)
    //  console.log(arr2);
     return arr2
  } else {
    // if we didn't found duplicate it will return -1 
    return -1;
  }
}






let output1 = findDuplicate([2, 3, 1, 2, 3]); //input 2

console.log(output1);

