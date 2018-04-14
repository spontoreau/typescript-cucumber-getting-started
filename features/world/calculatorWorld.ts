import { Calculator } from "../../src/calculator";
import { World } from "cucumber";

declare module "cucumber" {
    interface World {
        calculator: Calculator;
        actual: number;
    }
}