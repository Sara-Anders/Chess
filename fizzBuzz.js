"use strict";

//starting at 0, start gets to 100 , start + 1 to show all numbers up to 100
for(let start= 0; start<=100; start+=1 ){
  //create blank string so can add # or " " depending on remainders
  let string = "";
  //start divisable by 3 remainder is 0
  if(start %3 === 0) {
    string += "fizz";
  }
  //start divisable by 5 remainder is 0
  if(start %5 === 0){
    string += "Buzz";
  }
  //check if anything has been added to string, if yes then DONE, if has been added than not divisable by 3/5, so add start value
  if (string === ""){
    string += start;
  }
  console.log(string)
}

