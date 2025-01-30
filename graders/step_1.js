// Grading / prep methods for Step 1

let step1Array = [];
let hasStartedStep1 = false;
let step1HasLoggedFirstElement = false;
let step1HasLoggedLastElement = false;

function executeStep1() {
     // Randomly generate an array with between 1 and 5 items
     let arrayLen = Math.ceil(Math.random() * 5);
     step1Array = [];
     for (let i = 0; i < arrayLen; i++) {
         step1Array.push(Math.ceil(Math.random() * 1000));
     }

     log("Value of myArray is:");
     log(JSON.stringify(step1Array));

     hasStartedStep1 = true;
     step1(step1Array);
}

function assertSuccessStep1(logMsg) {
    if (!hasStartedStep1) return;

    if (logMsg == step1Array[0]) {
        step1HasLoggedFirstElement = true;
    }
    if (logMsg == step1Array[step1Array.length - 1]) {
        step1HasLoggedLastElement = true;
    }
    if (step1HasLoggedFirstElement && step1HasLoggedLastElement) {
        success();
    }
}