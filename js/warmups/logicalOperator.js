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
  

  
  