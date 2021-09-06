
"use strict";


  let first="";
  //j becomes second switch for every other line starting with 1 
  for(let j=0; j< 8; j+=1){
    //other row
  for(let i = 0; i < 8; i+=1 ){
    //checking for evens and odds, if even first runs with ' ' if odd default with '#', either 1 or 0
    switch((i % 2) + (j % 2)) {
      //change case to 1 cause 1 comes up every other time 
      case 1:
        first += ' '; 
        break;
      default:
        first += '#';
       break;
    };
  
  }
  //first = first + \n at end of sequence, breaks line the end of 8 loops of i
  first += "\n";
}
// gives us first 
console.log(first);


