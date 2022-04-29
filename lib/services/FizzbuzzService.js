class FizzbuzzService{
    static applyValidationinExplorers(explorers){
        const explorersValidation = explorers.map((explorer) => {
            explorer.trick = explorer.score % 3 === 0 ? "FIZZ" : explorer.score
            return explorer;
        });
        return explorersValidation;
    }
}

module.exports = FizzbuzzService;