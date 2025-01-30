// Grading / prep methods for Step 2

let numPineappleVotes = 0;
let step2Array = [];

function executeStep2() {
     step2Array = [];
     for (let i = 0; i < 1000; i++) {
        let thisVote = randomPizzaVote();
        if (thisVote == 'pineapple') { numPineappleVotes++; }
        step2Array.push(thisVote);
     }

     log("listOfPizzaVotes has 1000 votes");
     log("The first 10 votes are:")
     log(JSON.stringify(step2Array.slice(0, 10), null,  ' '))
     log("")

     step2(step2Array);
}

function randomPizzaVote() {
    switch (Math.ceil(Math.random() * 5)) {
        case 1:
            return 'pineapple';
        case 2:
            return 'cheese';
        case 3:
            return 'anchovies';
        case 4:
            return 'pepperoni';
        default:
            return 'mushrooms';
    }
}

function assertSuccessStep2(logMsg) {
    if (logMsg == numPineappleVotes) {
        success();
    }
}