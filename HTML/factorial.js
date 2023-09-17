function calFactorial(num){
    if(num < 0){
        return "Factorial is not defined for negative numbers";
    }
    else if(num == 0 || num == 1){
        return 1;
    }
    else{
        let factorial = 1;
        for(let i = 2; i <= num; i++){
            factorial *= i;
        }
        return factorial;
    }
}
const number = 5;
const result = calFactorial(number);
console.log(`The Factorial of ${number} is ${result}`);