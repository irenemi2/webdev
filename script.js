// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output: 34223

function reversenum(num){
    let rev=0;
    while(num>0){
        rev=rev*10+num%10;
        num=Math.floor(num/10);
    }
    return rev;
}
// let num=23525786;
// console.log(reversenum(num));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
// madam or nurses run

function palindromeString(str){
    let re=/[\W_]/g;
    let result=str.toLowerCase().replace(re,'');
    let rev=result.split('').reverse().join('');
    // console.log(result);
    if (result==rev)
        return true;
    else
        return false;
}
// let str="nurses Run";
// console.log(palindromeString(str));

// 3. Write a JavaScript function that generates all combinations of a string. 
// Example string: 'dog' 
// Expected Output: d, do, dog, o, og, g

function getCombinations(str){
    let combinations = [];
    for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
    return combinations;
}
// console.log(getCombinations("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string

function strSort(str){
    let sorted="";
    let x=str.split('');
    sorted=x.sort().join('');
    return sorted;
}
// console.log(strSort("codespace"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function camelCase(str){
    let s=str.split(' ');
    for(let i=0;i<s.length;i++){
        let x=s[i].charAt(0);
        s[i]=s[i].replace(x,x.toUpperCase());
    }
    let result=s.join(' ');
    return result;
}
// console.log(camelCase("the quick brown fox"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function longestWord(str){
    let s=str.split(' ');
    let x=0;
    let result="";
    for(let i=0;i<s.length;i++){
        if (x<s[i].length){
            x=s[i].length;
            result=s[i];
        }
    }
    return result;
}
// console.log(longestWord("Web Development Tutorial"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function countVowels(str){
    let count=0;
    let s=str.toLowerCase();
    for(let i=0;i<s.length;i++){
        if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u'){
            count++;
        }
    }
    return count;
}
// console.log(countVowels("The Quick Brown Fox"));

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function isPrime(num){
    let flag=true;
    if(num==1){
        console.log("1 is neither prime nor composite");
        return;
    }
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i==0){
            flag=false;
        }
    }
    if(flag){
        console.log("Number is prime");
    }
    else{
        console.log("Number is not prime");
    }
}
// num=23;
// isPrime(num);

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function returnType(x){
    return typeof(x);
}
// let x=function (){};
// console.log(returnType(x));

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 

function identityMatrix(n){
    for(let i=0;i<n;i++){
        let v="";
        for(let j=0;j<n;j++){
            if(i==j){
                v+="1";
            }
            else{
                v+="0";
            }
        }
        console.log(v);
    }
}
// identityMatrix(4);

// 11. Write a JavaScript function which will take an array of numbers stored and find the second
// lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function secondL(arr){
    let secondMax=0,secondMin=0;
    if (arr.length < 2) {
        console.log(" Invalid Input ");
        return;
    }
    arr.sort(function(a,b){return a-b});
    let s=new Set(arr);
    let array=Array.from(s);
    return [array[1],array[array.length-2]]

}
// arr=[1,5,6,7,2,2,8,6,4,4];
// console.log(secondL(arr));

// 12. Write a JavaScript function which says whether a number is perfect. 
// According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to
// the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the
// number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is
// half the sum of all of its positive divisors (including itself).
// Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1
// + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 +
// 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the
// perfect numbers 496 and 8128.

function perfectNum(num){
    let sum=0;
    for(let i = 1; i < num; i++) {
        if(num % i == 0) {
            sum+=i;
        }
    }
    if (sum==num)
        console.log("Perfect Number");
    else
        console.log("Not a Perfect Number");
}
// perfectNum(8128);

// 13. Write a JavaScript function to compute the factors of a positive integer. 

function factor(num){
    for(let i = 1; i <=num; i++) {
        if(num % i == 0) {
            console.log(i)
        }
    }
}
// factor(4);

// 14. Write a JavaScript function to convert an amount to coins. 
// Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
// Output: 25, 10, 10, 1

function amountTocoins(num,coins){
    let x= num;
    let i=0;
    while(x>0){
        if(x>=coins[i]){
            console.log(coins[i]);
            x-=coins[i];
        }
        else{
            i+=1;
        }
    }
}
// amountTocoins(80,[25,10,5,2,1]);

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the
// bases. Accept b and n from the user and display the result. 

function exponent(base,n){
    console.log(base**n);
}
// exponent(6,2);

// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function uniqueChar(str){
    let str1 = str.split("").sort().join("");
    for (let i = 0; i < str.length; i++) {
        if (str1[i] == str1[i + 1]) {
            continue;
        } else {
            console.log(str1[i] + " " + counter);
            counter = 1;
        }
    }
}

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function countLetter(str){
    let str1 = str.split("").sort().join("");
    let counter = 1;
    for (let i = 0; i < str.length; i++) {
        if (str1[i] == str1[i + 1]) {
            counter++;
        } else {
            console.log(str1[i] + " " + counter);
            counter = 1;
        }
    }
}
// countLetter("hello")

// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
// the desired value.
function binarySearch(arr,x){
    let l=0, r=arr.length-1;
         
    while (l<=r){
 
        // Find the mid index
        let mid=Math.floor((l + r)/2);
  
        // If element is present at mid, return True
        if (arr[mid]===x) return true;
 
        // Else look in left or right half accordingly
        else if (arr[mid] < x)
             l = mid + 1;
        else
             r = mid - 1;
    }
  
    return false;
}
// console.log(binarySearch([2,6,12,13,15,19,25],25))

// 19. Write a JavaScript function that returns array elements larger than a number. 

function greaterN(arr,N){
    arr.sort(function(a,b){return a-b});
    for(let i=0;i<arr.length;i++){
        if(arr[i]>N){
            console.log(arr[i])
        }
    }
}
// greaterN([6,2,35,2,5,1],3)

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample   character   list:
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function randomID(charList,length){
    let output="";
    let len=charList.length;
    for(let i=0;i<length;i++){
        output+=charList.charAt(Math.floor(Math.random()*len))
    }
    return output;
}

// console.log(randomID("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",8));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2)
// combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

function subset(arr, size)
 {
    let result_set = [], result;
    for(let x = 0; x < Math.pow(2, arr.length); x++)
    {
        result = [];
        i = arr.length - 1; 
        do
        {
            if( (x & (1 << i)) !== 0)
            {
                result.push(arr[i]);
            }
        }  while(i--);

        if( result.length == size)
        {
            result_set.push(result);
        }
    }

    return result_set; 
}

// console.log(subset([1, 2, 3], 3));


// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function
// will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

function occurrences(str,letter){

}

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
function uniqueChar(str){
    let arr=str.split('');
    for(let i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i])==i && arr.indexOf(arr[i],i+1)==-1){
            return arr[i];
        }
    }
    return "all are repeated";
}
// console.log(uniqueChar("abacddbece"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
// Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple
// sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing
// each pair of adjacent items and swapping them if they are in the wrong order". 
// Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]



// 25. Write a JavaScript function that accept a list of country names as input and returns the
// longest country name as output. 
// Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output: "United States of America"



// 26. Write a JavaScript function to find longest substring in a given a string without repeating
// characters. 



// 27. Write a JavaScript function that returns the longest palindrome in a given string. 
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest
// symmetric factor problem is the problem of finding a maximum-length contiguous substring of a
// given string that is also a palindrome. For example, the longest palindromic substring of
// "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for
// example, in the string "abracadabra", there is no palindromic substring with length greater than
// three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all
// substrings that are themselves palindromes and cannot be extended to larger palindromic
// substrings) rather than returning only one substring or returning the maximum length of a
// palindromic substring.



// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

function updateID(id, callBack)
{
    callBack(id);  
}

function updateStudent(id) {
    console.log("Student ID is "+id);
}

// updateID(1, updateStudent);


// 29. Write a JavaScript function to get the function name. 

function getName(){
    console.log( arguments.callee.name );
    return getName.caller;
}
function xyz(){
    console.log(getName());
}
// xyz()

//Map

Array.prototype.Mymap=function(cFun){
    let res=[];
    for(let i=0;i<this.length;i++){
        let x=cFun(this[i],i,this);
        res.push(x);
    }
    return res;
}
let arr=[3,2,5,2,7,8]
console.log(arr.Mymap(function (num) {num*2}));
//Reduce

Array.prototype.MyReduce=function(cFun,init){
    let accumulator=(init===undefined) ? 0 : init;
    for(let i=0;i<arr.length;i++){
        accumulator+=cFun(accumulator,arr[i],i,arr);
    }
    return accumulator;
}

// 1:Create a function that everytime you invoke it, it will print out the message "Congrats you earn 
//the chance!", however it can only print out the message with the first 5 excutions. all the rest 
//invoke will print out the message "Sorry you missed the chance"



// Filter an Array with a user input of minimum length
// arr1 = ["123123", "123", "451511", "422"]
// minimumLength = 5