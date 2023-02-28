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
let num=23525786;
console.log(reversenum(num));

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
let str="nurses Run";
console.log(palindromeString(str));

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
console.log(getCombinations("dog"));

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
console.log(strSort("codespace"));

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
console.log(camelCase("the quick brown fox"));

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
console.log(longestWord("Web Development Tutorial"));

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
console.log(countVowels("The Quick Brown Fox"));

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
num=23;
isPrime(num);

// 9. Write a JavaScript function which accepts an argument and returns the type. 
// Note: There are six possible values that typeof returns: object, boolean, function, number, string,
// and undefined.

function returnType(x){
    return typeof(x);
}
let x=function (){};
console.log(returnType(x));

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
identityMatrix(4);

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
arr=[1,5,6,7,2,2,8,6,4,4];
console.log(secondL(arr));

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
perfectNum(8128);

// 13. Write a JavaScript function to compute the factors of a positive integer. 

function factor(num){
    for(let i = 1; i <=num; i++) {
        if(num % i == 0) {
            console.log(i)
        }
    }
}
// factor(4);