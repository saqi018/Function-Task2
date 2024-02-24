//*********************************** Task 1 ******************************************//

 /* function sumOfDigits(number) {
   
    var numString = number.toString();
    
    
    var sum = 0;
   
    for (var i = 0; i < numString.length; i++) {
        
        sum += parseInt(numString[i]);
    }
    
   
    return sum;
}

var number = 1234;
console.log("Sum of digits:", sumOfDigits(number)); */





//*********************************** Task 2 ******************************************//





/* function sumRange(num1, num2) {
    if (num1 > num2) 
    {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }

   
    var sum = 0;

   
    for (var i = num1; i <= num2; i++)
     {
        sum += i;
    }

    
    return sum;
}

var num1 = 2;
var num2 = 5;
console.log("Sum of the range:", sumRange(num1, num2)); */





//*********************************** Task 3 ******************************************//




/* function calculateAverage(numbers) {
    
    if (numbers.length === 0) {
        return 0; 
    }

    
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    
    var average = sum / numbers.length;

    
    return average;
}


var numbers = [1, 2, 3, 4, 5];
console.log("Average:", calculateAverage(numbers)); */






//*********************************** Task 4 ******************************************//



/* function compareStringsByCount(str1, str2) {
  
    var charCount1 = {};
    var charCount2 = {};

   
    for (var char of str1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

   
    for (var char of str2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    if (Object.keys(charCount1).length !== Object.keys(charCount2).length) {
        return false; 
    }

   
    for (var char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false; 
        }
    }

    return true;
}


var str1 = "car";
var str2 = "bat";
console.log(compareStringsByCount(str1, str2)); 

str1 = "car";
str2 = "care";
console.log(compareStringsByCount(str1, str2)); */





//*********************************** Task 5 ******************************************//


/* function swapFirstAndLastCharacter(str) {
    
    var chars = str.split('');

    
    var temp = chars[0];
    chars[0] = chars[str.length - 1];
    chars[str.length - 1] = temp;

  
    var swappedStr = chars.join('');

  
    return swappedStr;
}


var str = "saqib";
console.log("Original string:", str);
console.log("Swapped string:", swapFirstAndLastCharacter(str)); */



