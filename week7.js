// Coding Steps:
// All questions should be printed to your Browser's console using console.log()

//1.) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.
let ages =  [3, 9, 23, 64, 2, 8, 28, 93];
console.log('ages', ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);



ages.push(100);
console.log('ages after pushing a new value', ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);

let averageAge = 0;

for(let i = 0; i < ages.length; i++){
    //console.log(i, 'test');
    averageAge += ages [i];
    console.log('Index:', i, 'averageAge', averageAge);
}
console.log('Total sum', averageAge);
let average = averageAge/ ages.length
console.log('Average', average);

//2.) Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalChairs = 0;

for(let i = 0; i < names.length; i++) {
   // console.log(i, 'test');
   totalChairs += names[i].length;
   console.log('index:', i, 'names:', names[i], 'totalChairs:', totalChairs);
 }
 let averageName = totalChairs/ names.length;
 console.log('Average of Names', averageName);

 let concatNames = "";
 for(let i = 0; i < names.length; i++) {
    //console.log(i, 'test');
    concatNames= concatNames.concat(names[i] + " ")
    console.log('Names concationated', concatNames);
 }

//3.) How do you access the last element of any array?
console.log('Last element of ages array:',ages[ages.length - 1]);
//4.) How do you access the first element of any array?
console.log('First element of ages array', ages[0]);
//5.) Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:


 //let names = ["Kelly", "Sam", "Kate"];    // starting with this array
 //let nameLengths = [5, 3, 4];             // create a new array

 let nameLengths = [];
 for(let i = 0; i < names.length; i++) {
    // console.log(i,'test');
    nameLengths.push(names[i].length)
    console.log('Name lengths array:', nameLengths);
 }
//6.) Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let totalSum = 0;
for(let i = 0; i < nameLengths.length; i++) {
    //console.log(i, 'test');
    totalSum += nameLengths[i]
    console.log('totalSum:', totalSum);
}
//7.) Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatWords(word, n){
    console.log('word par:', word, 'n par:', n);
    let concat = word.repeat(n)
    console.log(concat);
}
concatWords('Hello', 3);
//8.) Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, LastName){
    let fullName= firstName + " " + LastName;
    console.log(fullName);
}
fullName('Nick', 'Alexander');
//9.) Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [100,200,300,400];
let numbers2 = [1,2,3,4];

function sumNumbersArray(array){
    let total = 0;
    for(i =0; i < array.length; i++)
        //console.log(i, 'Test')
    total += array[i];
    console.log('Total:' , total);


if (total > 100) {
    console.log(total,true);
    return true;
} else {
    console.log(total, false);
    return false;
}
}
sumNumbersArray(numbers2);

//10.) Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateNumbersAverage(array){
    let total = 0;
    for(let i =0; i < array.length; i++){
       // console.log('test');
    total += array[i];
    console.log('calculate Function, Total:',total);
    }
let average = total / array.length
console.log('Average of Numbers',average);
return average;
}
calculateNumbersAverage(numbers1);
//11.) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [100,100,100];
let numbers4= [100,100,99];

function twoAverages(array1, array2){
    console.log('parameters', array1, array2);
    let total1 = 0;
    let total2 = 0;
    for(const number of array1){
        total1 += number
        console.log('current Number loop1:', number,'total1', total1);
    }
    for (const number of array2){
        total2 += number
        console.log('current Number loop2:', number,'total2', total2);
    }
    let average1 = total1/ array1.length;
    let average2 = total2/ array2.length;
    console.log('Averages', average1, average2);
    if ( average1 > average2){
        console.log(true);
        return true;
    } else if (average1 < average2) {
        console.log(false);
        return false;
    } else {
        console.log('Numbers are equal');
    }
}
twoAverages(numbers3, numbers4);
//12.) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
console.log('parameters', isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log('Buy a Drink', buyDrink);
return buyDrink;
}
willBuyDrink(true,11)

//13.) Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// I chose to do this to demonstrate the importance on sharing your polictal opinion.

function WhowillBePresident(president){ // This function will determine who will become president of the United States in 2024. 

    return president.includes('!') ? true : false; // this could also be used in an if/else statement; however, using the chanary operator made the code easier to read. 
}
// these two invoke the function on whowillbepresident. // the use of the chanary operator (!) determines which one is true
console.log('Donald Trump',WhowillBePresident('Donald J Trump!'));
console.log('Kamala Harris',WhowillBePresident('Kamala Harris'));


function dollarsTocoins(dollars, coins) // This function tranfers dollars to coins// I chose to do this because I find it fun to save coins and caculate.
{
 if (dollars === 0) // I wanted to utilize an if else statement to return something.. 
  {
     return [];
   } 
 else
   {
     if (dollars >= coins[0]) 
       {
        left = (dollars - coins[0]);
        return [coins[0]].concat( dollarsTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return dollarsTocoins(dollars, coins);
        }
    }
} 
console.log('transferred dollars to coins',dollarsTocoins(46, [25, 10, 5, 2,1]));
 // also, I wanted to do this as an additon to the project, that way i could get feedback to see if there is an easier way to project this?


