import { expect } from 'chai';
import { Given, When, Then, World } from "cucumber";
import { Calculator } from "../../src/calculator";

Given('a calculator', function() {
    this.calculator = new Calculator();
});

When('I divide {int} by {int}', function(number1: number, number2: number) {
    try {
        this.actual = this.calculator.divide(number1, number2);
    } catch(error) {
        this.error = error;
    }
});

Then("the result is {int}", function(expected: number) {
    expect(this.actual).to.be.equal(expected);
});

Then("an error occurred with the following message {string}", function(expected: string) {
    expect(this.error).to.be.not.null;
    expect(this.error.message).to.be.equal("Impossible to divide by 0");
});