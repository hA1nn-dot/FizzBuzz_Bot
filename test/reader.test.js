const Reader = require('./../lib/utils/Reader')
const ExplorersService = require('./../lib/services/ExplorerServices')
const FizzBuzzService = require('./../lib/services/FizzbuzzService')
test('1) Test reader class', () => {
    const explorers = Reader.readJsonFile('explorers.json');
    expect(explorers).toBeDefined();
})

test('2) Get the quantity of explorers names in node', () => {
    const explorers = Reader.readJsonFile('explorers.json');
    const quantity = ExplorersService.getExplorersAmountByMission(explorers,"node");
    expect(quantity).toBeGreaterThan(0);
})

test('3) Get the explorers usernames in Node', () => {
    const explorers = Reader.readJsonFile('explorers.json');
    const usernamesInNode = ExplorersService.getExplorersUserNamesByMission(explorers,"node");
    expect(usernamesInNode).toBeTruthy(usernamesInNode.isArray);
})

test('4) FizzBuzz testing', () => {
    const explorers = Reader.readJsonFile('explorers.json');
    const explorerValidation = FizzBuzzService.applyValidationinExplorers(explorers);
    const filterFizzExplorers = explorerValidation.filter(explorer => explorer % 3 === 0);
    const expectFizz = filterFizzExplorers.some((explorer) => explorer.score != "FIZZ");
    expect(expectFizz).toBeFalsy();
})

test('5) Filtering by score', () => {
    const explorers = Reader.readJsonFile('explorers.json');
    const explorerValidation = FizzBuzzService.applyValidationinExplorers(explorers);
    const filterScoreExplorers = explorerValidation.filter(explorer => explorer % 3 != 0);
    const expectAnynumber = filterScoreExplorers.some((explorer) => !explorer.score.isInteger);

    expect(expectAnynumber).toBeTruthy();

})