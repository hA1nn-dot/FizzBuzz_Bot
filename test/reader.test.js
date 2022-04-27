const Reader = require('./../lib/utils/Reader')
const ExplorersService = require('./../lib/services/ExplorerServices')
test('1) Test reader class', () => {
    const explorers = Reader.readJsonFile('explorers.json');
    expect(explorers).toBeDefined();
})

test('2) Test Explorer quantity of explorers by mission', () => {
    const explorers = Reader.readJsonFile('explorers.json');
    // Part 2: Get the quantity of explorers names in node
    const quantity = ExplorersService.getExplorersAmountByMission(explorers,"node");
    expect(quantity).toBeGreaterThan(0);
})