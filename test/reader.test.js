const Reader = require('./../lib/utils/Reader')
const ExplorersService = require('./../lib/services/ExplorerServices')
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