function nextInLine(arr, item) {
  // Only change code below this line
  if (arr.length == 0) {
    arr.push(item);
    return item;
  } else {
    arr.push(item);

    return arr.shift();
  }

  // Only change code above this line
}

// Setup
const testArr = [2];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1));
console.log("After: " + JSON.stringify(testArr));
