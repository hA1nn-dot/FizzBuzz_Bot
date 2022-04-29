const Reader = require('../lib/utils/Reader')
test('1) Test reader class', () => {
    const explorers = Reader.readJsonFile('./test/data/explorers.test.json');
    expect(explorers).toBeDefined();
})