// This is tassnim 
// this is nour 
// FIRST EXERCICE
function opposite(boolean){
    return !boolean
}
// SECOND EXERCICE

function ex1(boll){
    return !boll

}
function ex2(){
    console.log(true&&true)
    console.log(true&&false)
    console.log(false&&true)
    console.log(false&&false)

}
function ex3(){
    console.log(true||true)
    console.log(true||false)
    console.log(false||true)
    console.log(false||false)

}
function ex4(){
    console.log(3>4)
    console.log(4>3)
    console.log (!(4>3))
    console.log(4<=4 && 5<6)
    console.log (3<4 && 8<12)
    console.log(3===3 || 4===4)
    console.log()
}
function ex9(a){
    if(a>5 && a<20){
        return true
    }
     else{
        return false
        }
    }


function factoriel(f){
    let result=1
    let i=1
    while(i<=f){
        result=result*i
        i=i+1
    }
    return result
}

//EXERCICES WITH FOR
function countMinMax(min, max) {
    let n=0
    for(let  i=0;i<=n ;i++){
        // I DON'T KHNOW ..
    }
}

function sumMinToMax(min,max){
    let n=0
    for(let  i=0;i<=n ;i++){
    return min+max

}
}

function productMinToMax(min, max) {
    let n=0
    for(let  i=0;i<=n ;i++){
    return min*max
}
}


function multiplyBy10NTimes(num, n) {
    for (let i = 0; i < n; i++) {
      num = num * 10;
    }
    return num;
  }
  
  function countCharAtIndex(string1, index, string2) {
    let count = 0;
    for (let i = 0; i < string2.length; i++) {
      if (string2.charAt(i) === string1.charAt(index)) {
        count++;
      }
    }
    return count;
  }
  
//EXERCICE WITH WHILE
function countMinMax(min, max) {
    let count = 0;
    let currentMin = min;
    let currentMax = max;
  
    while (currentMin < currentMax) {
      currentMin++;
      count++;
    }
  
    return  count;
  }
  
  function sumMinToMax(min, max) {
    let sum = 0;
    let current = min;
  
    while (current <= max) {
      sum += current;
      current++;
    }
  
    return sum;
  }
  
  function productMinToMax(min, max) {
    let product = 1;
    let current = min;
  
    while (current < max) {
      product *= current;
      current++;
    }
  
    return product;
  }
  
  
  function multiplyBy10NTimes(num, n) {
    let count = 0;
    while (count < n) {
      num *= 10;
      count++;
    }
    return num;
  }
  
  function countCharAtIndex(string1, index, string2) {
    let count = 0;
    let i = 0;
  
    while (i < string2.length) {
      if (string2.charAt(i) === string1.charAt(index)) {
        count++;
      }
      i++;
    }
  
    return count;
  }



  // ARRAYS 
  //1.Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop and prints all elements of the array in the console using console.log.
  function arrayFor(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
  //2.Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log.
  
  function arrayWhile(arr) {
    let i = 0;
    while (i < arr.length) {
      console.log(arr[i]);
      i++;
    }
  }
  //3.Write a function called sum that takes an array of numbers as a parameter and returns the sum of the numbers in the array.
  function sum(array) {
    let i=0
    for(i=0;i<array.length;i++){
      s=s+array[i]
    }
    return i;
  }
  //4.Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.
  function sumEveryOther(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
      sum += arr[i];
    }
    return sum;
  }

  //5.Write a function called sumStartAt that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the inputted index, until the end of the array.
  function sumStartAt(arr, index) {
    let sum = 0;
    for (let i = index ; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  //6.Write a function called sumUntil that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the index 0, until the index parameter.
  function sumUntil(arr, index) {
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      sum += arr[i];
    }
    return sum;
  }
  //7.Write a function called subtractReverse that takes an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element of the input array (in reverse).
  function subtractReverse(arr) {
    let result = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      result -= arr[i];
    }
    return result;
  }
  //8.Write a function called product that takes an array as a parameter and returns the product of all the elements in the array.
  function product(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i];
    }
    return result;
  }

  //9.Write a function called average that takes an array as a parameter and returns the average of all the elements in the array.
  function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  //10.Write a function called square that takes an array as a parameter and returns a new array where each element is the square of the element of the given array.
  function square(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * arr[i]);
    }
    return result;
  }
  //11.Write a function called isArray that takes one parameter and returns true if the input is array otherwise returns false.
  // -------