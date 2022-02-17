// In JavaScript we have 3 types of Logical Operators.
// AND, OR, Not

// Logical AND (&&)
// Return TRUE if both operands are TRUE
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan); // It will return true


// Logical OR (||)
// Return TRUE if one of the operands is TRUE
let highIncomeTwo = false;
let goodCreditScoreTwo = true;
let eligibleForLoanTwo = highIncomeTwo || goodCreditScoreTwo;
console.log(eligibleForLoanTwo); // It will return true

// Not (!)
console.log(!eligibleForLoanTwo); // It will return false