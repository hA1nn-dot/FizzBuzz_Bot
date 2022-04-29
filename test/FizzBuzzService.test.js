const FizzBuzzService = require('../lib/services/FizzbuzzService');

describe("Check FizzBuzz functionality", () => {
    test('1) FizzBuzz testing', () => {
        const explorers = [{name: "explorer1", score: 3}];    
        const explorerValidation = FizzBuzzService.applyValidationinExplorers(explorers);
        expect(explorerValidation).toEqual([{name: "explorer1", trick: "FIZZ", score: 3}]);
    });
    test('2) FizzBuzz testing error', () => {
        const explorers = [{name: "explorer1", score: 3}];    
        const explorerValidation = FizzBuzzService.applyValidationinExplorers(explorers);
        expect(explorerValidation).toEqual([{name: "explorer1", trick: "FIZZ", score: 3}]);
    });
});

