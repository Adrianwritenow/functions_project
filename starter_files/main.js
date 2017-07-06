// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(smallNum, largeNum){
  if (largeNum>smallNum) {
    return (+largeNum+ ' is a larger number');
  }
    // Your answer here
}
console.log(max(3,6));

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(number1, number2, number3)
{
  if (number1>number2)
  {
    if (number1>number3)
    {
      return(+number1+' is the largest number');
    }
    else
    { return (+number3+' is the largest number');
  }
  }
else if (number2>number1)
  {
    if (number2>number3)
    {
      return(+number2+' is the largest number');
    }
    else
    { return (+number3+' is the largest number');
  }
  }
  }

  console.log(maxOfThree(3,7,9));
    // Your answer here



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char==='a'||char==='e'||char==='i'||char==='o'||char==='u')
   {
    return true;
  }
  else
  {
  return false;
  }
  }
  console.log(isVowel('x'));

    // Your answer here



// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(numberA, numberB)
{
return numberA + numberB;
}
console.log(sum(4,5));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(numberC,numberD,numberE)
{
return (numberC+numberD+numberE)/3;
}
console.log(avg(4,5,6));




// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(str){
return str.length;
}
console.log(getLength('WUBALUBADUBDUB'));


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(numberE,numberF)
{
if (numberF>numberE)
{
return true;
}
else return false;
}
console.log(greaterThan(6,7));



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name)
{
return ("Hello, "+name+"!");
}
console.log(greet('Morty'));



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madLib(word1, word2, word3, word4)
{
return('I have '+word1+' in my '+word2+', everything is '+word3+ ' and on '+word4+'!' );
}
console.log(madLib('ants','eyes','black','sale'));
