const myArray = [['Spartan', 23], ['Master Chief', 23] ['Halo', 23]];


// part 2
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  for(let i = 0; i < arr.length; i++){
    for(let j = 0;j < arr[i].length; j++){
    product = product * arr[i][j];
    }
  
  }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//   part 7
function testGreaterThan(val) {
    if (val > 100) { 
      return "Over 100";
    }
  
    if (val > 10) {
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);

  function sumOf(a, b){
    if(a > b){
    return a 
  } else {
    return b
  }
}
  function equal(a, b){
    if(a == b){
    return "is equal"
  } else {
    return 'not equal'
  }
}