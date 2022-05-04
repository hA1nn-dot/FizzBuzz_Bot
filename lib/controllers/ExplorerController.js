const ExplorerService = require('./../services/ExplorerServices');
const FizzBuzzService = require('./../services/FizzbuzzService');
const Reader = require('./../utils/Reader');

class ExplorerController{
    static filterExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersFiltered = ExplorerService.filterByMission(explorers,mission);
        return explorersFiltered;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersNames = ExplorerService.getExplorersUserNamesByMission(explorers,mission);
        return explorersNames;
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmount = ExplorerService.getExplorersAmountByMission(explorers,mission);
        return explorersAmount;
    }
    static applyFizzbuzz(number){
        return FizzBuzzService.applyValidationNumber(number);
    }
}


module.exports = ExplorerController;