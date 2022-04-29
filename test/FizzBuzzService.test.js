const FizzBuzzService = require("../lib/services/FizzbuzzService");

describe("Check FizzBuzz functionality", () => {
    test("1) FizzBuzz testing", () => {
        const explorers = [{name: "explorer1", score: 3}];    
        const explorerValidation = FizzBuzzService.applyValidationinExplorers(explorers);
        expect(explorerValidation).toEqual([{name: "explorer1", trick: "FIZZ", score: 3}]);
    });

    test("2) FizzBuzz testing BUZZ", () => {
        const explorers = [{name: "explorer1", score: 5}];    
        const explorerValidation = FizzBuzzService.applyValidationinExplorers(explorers);
        expect(explorerValidation).toEqual([{name: "explorer1", trick: "BUZZ", score: 5}]);
    });

    test("3) FizzBuzz testing FIZZBUZZ", () => {
        const explorers = [{name: "explorer1", score: 15}];    
        const explorerValidation = FizzBuzzService.applyValidationinExplorers(explorers);
        expect(explorerValidation).toEqual([{name: "explorer1", trick: "FIZZBUZZ", score: 15}]);
    });
});

