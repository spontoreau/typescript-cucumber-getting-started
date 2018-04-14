export class Calculator {
    divide(number1: number, number2: number): number {
        if(number2 == 0)
            throw new Error("Impossible to divide by 0");
            
        return number1 / number2;
    }
}