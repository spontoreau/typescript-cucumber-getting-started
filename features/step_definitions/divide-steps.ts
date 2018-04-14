import { Given, When, Then } from "cucumber";

Given('a calculator', function() {
    throw new Error("Not implemented");
});

When('I divide {int} by {int}', function(number1: number, number2: number) {
    throw new Error("Not implemented");
});

Then("the result is {int}", function(expected: number) {
    throw new Error("Not implemented");
});

Then("an error occurred with the following message {string}", function(expected: string) {
    throw new Error("Not implemented");
});