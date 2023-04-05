// Creating a variable that holds bill before tip; randomly generated for values between 0-100
let pretipBill = Math.floor(Math.random() * 101);

// Creating function that multiplies bill before tip by 20%
function calculateTip (pretipBill){
    tip = (pretipBill * 0.2); 
    return tip;
    // return " Tip Total is $" + tip
};

// Calling the function using the variable as the argument
console.log(calculateTip(pretipBill));

// Creating function to get total bill
function getBillTotal(pretipBill){
    billTotal = (pretipBill + calculateTip(pretipBill)).toFixed(2);
    billTotal = billTotal;
    return "Your total bill is: $" + billTotal + ". $" + tip.toFixed(2) + " was added for tip. To your earlier bill of $" + pretipBill + ".";
};

// Calling function using variable
console.log(getBillTotal(pretipBill));