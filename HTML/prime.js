function primeNumbers(num){
    if(num <= 1){
        return false;
    }
    else if(num <= 3){
        return true;
    }
    else if(num % 2 === 0 || number % 3 == 0){
        return false;
    }
    else;{
        for(let i = 5; i * i <= num; i += 6){
            if(num % i === 0 || num % (i + 2) === 0){
                return false;
            }
        }
        return true;
    }
}
const number = 10;
if(primeNumbers(number)){
    console.log(`${number} is a prime number.`);
}
else{
    console.log(`${number} is not a prime number.`);
}