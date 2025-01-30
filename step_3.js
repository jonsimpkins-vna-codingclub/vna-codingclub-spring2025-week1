function step3(listOfPizzaVotes) {
    // listOfPizzaVotes is an array of votes for what
    // kind of pizza we should order.

    let votesByType = new Map();

    // TODO: Go through all the votes in the list, and:
    // 1) Add the pizza type to the map if we havne't seen it yet
    // 2) Increase the vote count for that pizza type in the map

    let allPizzaTypes = votesByType.keys().toArray();

    // allPizzaTypes is now an array of all the types
    // that we saw

    // TODO: Log all the types and the corresponding vote count
    // For example: "pineapple: 17" or "cheese: 999"

    // Remember that you concatenate strings by adding them together,
    // so:
    // let a = 'pineapple';
    // let b = 17;
    // log(a + ': ' + b);
    //
    // would log "pineapple: 17"
}