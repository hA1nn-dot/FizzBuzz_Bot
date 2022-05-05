const FizzBuzzService = require("./../services/FizzbuzzService");
class TelegramController{

    static fizzBuzzTrick(chatId ,telegramInput){
        const numberToApplyFb = parseInt(telegramInput.text);

        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = FizzBuzzService.applyValidationNumber(numberToApplyFb);
            return `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        } else {
            return "Envía un número válido"
        }
    }
}

module.exports = TelegramController;