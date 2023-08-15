function cubeNumber(number){
    if(typeof number !== "number" ){
        return "You must provide an interger number!";
    }else{
        const result = number **3
        return result;
    }
}

function matchFinder(string1, string2){
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
      return "Both inputs should be strings!";
    }else if(string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }    
}

function sortMaker(arr){
    if (arr.length !== 2) {
      return "Invalid input. Please provide an array with exactly two numbers.";
    }
    const num1 = arr[0];
    const num2 = arr[1];
    if (num1 < 0 || num2 < 0){
      return "Invalid Input";
    }
    if (num1 === num2){
      return "equal";
    }
    if (num1 > num2){
      return [num1, num2];
    } else {
      return [num2, num1];
    }
}

function findAddress(obj){
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';
  
    return `${street},${house},${society}`;
}

function canPay(changeArray, totalDue){
    if (changeArray.length === 0){
      return "You must provide a non-empty array.";
    }
    let total = 0;
    for (let i = 0; i <changeArray.length; i++){
      total += changeArray[i];
    }
    if (total >= totalDue){
      return true; 
    } else{
      return false;
    }
}

  
  
 
  
 
  
  

  