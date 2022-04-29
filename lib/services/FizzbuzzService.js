class FizzbuzzService{
    static applyValidationinExplorers(explorers){
        const explorersValidation = explorers.map((explorer) => {
            if(explorer.score % 5 === 0 && explorer.score % 3 === 0){
                explorer.trick = "FIZZBUZZ";
            }else if(explorer.score % 3 === 0){
                explorer.trick = "FIZZ";    
            } else if(explorer.score % 5 === 0){
                explorer.trick = "BUZZ";
            }
            return explorer;
        });
        return explorersValidation;
    }
}

module.exports = FizzbuzzService;