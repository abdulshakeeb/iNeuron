//Write a program to find the factorial of a number.
//let number be 7
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(7)); //5040

//let number be 0
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
console.log(factorial(0)); //1