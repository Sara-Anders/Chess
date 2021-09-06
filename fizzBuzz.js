"use strict";


for(let start= 0; start<=100; start+=1 ){
  let string = "";
  if(start %3 === 0) {
    string += "fizz";
  }
  if(start %5 === 0){
    string += "Buzz";
  }
  if(string === ""){
    string += start;
  }
  console.log(string)
}

