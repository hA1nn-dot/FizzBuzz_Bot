const ExplorersService = require("./../lib/services/ExplorerServices");

describe("Testing ExplorerService methods", () =>{
    test("1) Get explorers with an especific mission", () => {
        const explorers = [{name: "haim", mission: "node"},{name: "Dude", mission: "Java"}];
        const explorersNode = ExplorersService.filterByMission(explorers,"node");
        expect(explorersNode).toEqual([{name: "haim", mission: "node"}]);
    });
});