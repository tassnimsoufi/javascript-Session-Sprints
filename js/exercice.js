//ESSENTIAL
//1.Fix the syntax & style issues with the three objects below:

let animal={ firstName:"Yan",lastName:"Fan",animal:"dog", noise:"bark",age:"3",type:"Golden Retriever",color:"yellow"}

//Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.
let self={ firstName:"Tassnim",lastName:"Soufi",age:"21",hometown:"New Town"}

//Access the favorite food property in the object using dot notation, and reassign it to a different food.
let Food={
    myFood: ["Pasta"],
    anotherFood:["Lasagne ,pizza"]
};

//4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.
{
    name: {
      firstName: 'Tassnim'
    }
    lastName:{
        lastn:'Soufi'
    }
    Age:{
        age:'21'
    }
  }
  //5.Write a function called emptyObject that takes no parameters and returns an empty object.
  function emptyObject(){  
    return object={}
  }  
  //6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
var myObject={animal:'cat',food:'turkey',age:3}
function addProperty(obj, key) {
    return obj[key] = true;
  }
// 7.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌deleteProperty‌‌ ‌that‌ ‌takes‌ ‌two parameters an‌ ‌object‌ ‌and‌ a key as a string. It then removes the property with that key from the object.
function deleteProperty(obj, key) {
    delete obj[key];
  }
  var myObject={animal:'cat',food:'turkey',age:3}
