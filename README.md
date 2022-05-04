# FizzBuzz-refactoring
LaunchX activity to do a Telegram bot
## Activities
- Use Telegram to show FIZZBUZZ service

<summary>bot.js </summary>

`ExplorerController.js`
``` javascript
static applyFizzbuzz(number){
        return FizzBuzzService.applyValidationNumber(number);
    }

```

`FizzBuzzServer.js`
``` javascript
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
```

Import Controllers in `bot.js`
``` javascript
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");
```
Run bot with `npm run bot`

## Tools
- Node.js
- Jest
- Linter
