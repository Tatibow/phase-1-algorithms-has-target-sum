function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++) {
    let loop1 = array[i];
    for(let j = i + 1; j < array.length; j++) {
      let loop2 = array[j]
      if(loop1 + loop2 === target) return true;
    }
  }
  return false;
}

/*
  Write the Big O time complexity of your function here
  O(n^2)
*/

/*
  The function should return true if atleast two numbers in the array
  adds up to the target.
*/

/*
  Add written explanation of your solution here
  I used what's called a nested loop to help me solve the problem. The first loop starts at index 0 and the second starts at index 1
  so as it goes through the array it can search for the sum in pairs.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
