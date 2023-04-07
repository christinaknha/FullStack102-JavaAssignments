function outer(){
    // step 1a :declared two variables a = string, b = object
    let a = "Hello";
    let b = {dog: "Taco", cat: "Marbs"};
    // step 1b: log values immediately, prints a and b to terminal
    console.log(a);
    console.log(b);

    // Step 3:inner function takes two arguments a and b
    function inner(a,b){
        // Step 5: assign a and b new values. Log at end of function and after inner(a,b) execution
        a = "Goodbye";
        b = {dog: "Angel", cat: "Lala"}
        // Step 6, inside inner function, update property.
        b.cat = "Emmie";

        //Step 2: log values of a and b in inner function
        console.log(a);
        console.log(b);
    }
    // Step 4: pass a and b as arguments when inner() is executed
    inner(a,b)
    // Part of Step 5
    console.log(a);
    console.log(b);
}

outer()

// Step 1 results, prints outer function a and b to terminal
// Step 2 results, prints outer function a and b twice to terminal
// Step 3 results, prints outer function a and b and gives undefined for inner function
// Step 4 results, prints outer function a and b twice to terminal
// Step 5 results, OG a and b, updated a and b, OG a and b