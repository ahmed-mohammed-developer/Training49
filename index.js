
function match_arrays(array1, array2) {
  // write your code here
  /*
    return array1.every(function(element, index){
      return element === array2[index];
    })
      */
      if(array1.length === array2.length){
       return true
      }
      return false
   
   }
console.log(match_arrays( ['hel445222lo', 'there', 'word2'],  ['hello', 'there', 'word2', "aaaa"]));
