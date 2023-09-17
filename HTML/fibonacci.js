function fibonacciSequence(num){
    if(num <= 0){
        return[];
    }
    else if(num == 1){
        return [0];
    }
    else if(num == 2){
        return [0, 1];
    }
    else{
        const fibSequence = [0, 1];
        while(fibSequence.length < num){
            const nextNumber = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
                fibSequence.push(nextNumber);
        }
        return fibSequence;
    }
}
const num = 10;
const sequence = fibonacciSequence(num);
console.log(`The first ${num} numbers in the Fibonacci sequence are: ${sequence.join('')}`);