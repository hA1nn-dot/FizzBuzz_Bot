const Reader = require('./../lib/utils/Reader')
test('1) Test reader class', () => {
    const explorers = Reader.readJsonFile('explorers.json');
    expect(explorers).toBeDefined();
})