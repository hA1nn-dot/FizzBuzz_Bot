# FizzBuzz-refactoring
LaunchX activity to improve refactoring and testing with Jest
## Activities
- Refactoring
- Testing
- Well-structure project
- Import classes using ECMA Script
- CI/CD with github actions
## Tools
- Node.js
- Jest
- Linter

<details>
<summary>Files app.js & explorers.json </summary>

`app.js`
```javascript
const fs = require("fs");
// Part 1 Read json file ===========================
const rawdata = fs.readFileSync("explorers.json");
const explorers = JSON.parse(rawdata);
// Part 2: Get the quantity of explorers names in node
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
//console.log(explorersInNode.length)
// Part4: Get the explorer's usernames in Node
const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
//console.log(usernamesInNode)
// DEAD CODE: Part 5,6,7, please remove this and go to Part 8!
// Part 5: Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.
// Score: 3, Trick: FIZZ.
// Score: 4, Trick: 4.
// Score: 5, Trick: 5.
const assignFizzTrick = function(explorer){
    if(explorer.score%3 === 0){
        explorer.trick = "FIZZ";
        return explorer;
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};
const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));
// Part 6: Get a new list of explorers in node if the score number is divisible by 5, we need to set a new property called trick and set the value BUZZ, if not this value should be just the score
//
const assignBuzzTrick = function(explorer){
    if(explorer.score%5 === 0){
        explorer.trick = "BUZZ";
        return explorer;
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};
const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => assignBuzzTrick(explorer));
//Part7: Get a new list of explorers in Node, if the score number is divisible by 3 AND by 5 we need to set a new property called FIZZBUZZ, if not this value should be the same score value
const assignFizzBuzzTrick = function(explorer){
    if(explorer.score%5 === 0 && explorer.score%3 === 0){
        explorer.trick = "FIZZBUZZ";
        return explorer;
    }else{
        explorer.trick = explorer.score;
        return explorer;
    }
};
const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));
// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO
```

  `explorers.json`
``` json
[
{
  "name": "Woopa1",
  "githubUsername": "ajolonauta1",
  "score": 1,
  "mission": "node",
  "stacks": [
    "javascript",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa2",
  "githubUsername": "ajolonauta2",
  "score": 2,
  "mission": "node",
  "stacks": [
    "javascript",
    "groovy",
    "elm"
  ]
},
{
  "name": "Woopa3",
  "githubUsername": "ajolonauta3",
  "score": 3,
  "mission": "node",
  "stacks": [
    "elixir",
    "groovy",
    "reasonML"
  ]
},
{
  "name": "Woopa4",
  "githubUsername": "ajolonauta4",
  "mission": "node",
  "score": 4,
  "stacks": [
    "javascript"
  ]
},
{
  "name": "Woopa5",
  "githubUsername": "ajolonauta5",
  "score": 5,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "elm"
  ]
},
{
  "name": "Woopa6",
  "githubUsername": "ajolonauta6",
  "score": 6,
  "mission": "java",
  "stacks": [
    "elm"
  ]
},
{
  "name": "Woopa7",
  "githubUsername": "ajolonauta7",
  "mission": "java",
  "score": 7,
  "stacks": [
  ]
},
{
  "name": "Woopa8",
  "githubUsername": "ajolonauta8",
  "score": 8,
  "mission": "java",
  "stacks": [
    "elm"
  ]
},
{
  "name": "Woopa9",
  "githubUsername": "ajolonauta9",
  "score": 9,
  "mission": "java",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa10",
  "githubUsername": "ajolonauta10",
  "score": 10,
  "mission": "java",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa11",
  "githubUsername": "ajolonauta11",
  "score": 11,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa12",
  "githubUsername": "ajolonauta12",
  "score": 12,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa13",
  "githubUsername": "ajolonauta13",
  "score": 13,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa14",
  "githubUsername": "ajolonauta14",
  "score": 14,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
},
{
  "name": "Woopa15",
  "githubUsername": "ajolonauta15",
  "score": 15,
  "mission": "node",
  "stacks": [
    "javascript",
    "elixir",
    "groovy",
    "reasonML",
    "elm"
  ]
}
] 
```  

</details>

## Classes

### Class Reader
![image](https://user-images.githubusercontent.com/48420854/166086012-fa960516-b3e3-49a4-bc28-ed4852426f2c.png)


### Class FizzBuzzServer
![image](https://user-images.githubusercontent.com/48420854/166086062-d9ec96dc-5b2d-464c-bc15-76d5d0e05d5a.png)


### Class ExplorerService
![image](https://user-images.githubusercontent.com/48420854/166086270-58c4e16e-8a38-4202-99b4-8127e3600b33.png)

#### In progress

