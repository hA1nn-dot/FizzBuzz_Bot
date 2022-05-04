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

    static applyValidationNumber(number){
        if(number % 5 === 0 && number % 3 === 0){
            return "FIZZBUZZ";
        }else if(number % 3 === 0){
            return "FIZZ";    
        } else if(number % 5 === 0){
            return "BUZZ";
        }
        return number;
    }
}

module.exports = FizzbuzzService;