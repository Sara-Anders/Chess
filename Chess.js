"use strict";


  let first="";
  for(let j=0; j< 8; j+=1){
  for(let i = 0; i <8; i+=1 ){
    switch((i%2) + (j%2)) {
      case 1:
        first += ' '; 
        break;
      default:
        first += '#';
       break;
    };
  
  }
  first += "\n";
}
console.log(first);
