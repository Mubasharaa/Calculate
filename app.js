function getNumber(num){
    
     var result = document.getElementById("results");
   result.value += num;
}
function clearResult(){
    var result = document.getElementById("results");
   result.value = ""
}
function getResult() {
    
    var result= document.getElementById("results");
  
  result.value= eval(result.value)
}
 

