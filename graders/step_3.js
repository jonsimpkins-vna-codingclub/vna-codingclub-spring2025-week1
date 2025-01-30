let step3Array = []

let step3Map = new Map();

function executeStep3() {
    step3Array = [];
    for (let i = 0; i < 1000; i++) {
       let thisVote = weirdRandomPizzaVote();
       
       if (!step3Map.has(thisVote)) {
        step3Map.set(thisVote, 0);
       }

       step3Map.set(thisVote, step3Map.get(thisVote) + 1);

       step3Array.push(thisVote);
    }

    log("listOfPizzaVotes has 1000 votes");
    log("The first 10 votes are:")
    log(JSON.stringify(step3Array.slice(0, 10), null,  ' '))
    log("")

    step3(step3Array);
}

function weirdRandomPizzaVote() {
    if (Math.random() * 100 > 99) {
        // Really uncommon choice
        return 'cauliflower';
    }

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


function assertSuccessStep3(logMsg) {
    let remainingTypes = step3Map.keys().toArray();

    for (let i = 0; i < remainingTypes.length; i++) {
        let thisType = remainingTypes[i];
        if (logMsg.includes(thisType) && logMsg.includes(step3Map.get(thisType))) {
            step3Map.delete(thisType);
        }
    }

    if (step3Map.size == 0) {
        success();
    }
}