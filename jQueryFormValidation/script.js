// submit button clicked will fire
$(document).ready($('#submit').on('click', () => {
    // Create variables for each of the form inputs
    let name = $('#name');
    let email = $('#email');
    let phoneNumber = $('#phone');

    // Create an array to store variables
    let required = [name, email, phoneNumber]

    // Creates a for loop to iterate through the array
    for( let i = 0; i < required.length; i++){
        // check to see if the value is empty
        if (required[i].val() === ""){
            // print message 
            $('#message').text("Please Fill Out Required Fields")
            // add warning class to this message
            $('#message').addClass("warning");
            // add warning class to array's items
            $('label').eq(i).addClass("warning");
            
            $('input').eq(i).on("change", function(){
                $('label').eq(i).removeClass("warning")
            })
        //     $('label').toggleClass(function(){
        //     if (required[i].val() != "") {
        //         $('label').eq(i).removeClass("warning")
        //     } else {
        //         $('label').eq(i).addClass("warning");
        //     })
        } else {
            $('label').removeClass("warning");
        }
    }
    if (!$('label').hasClass("warning")){
        $('form').remove();
        $('h2').text("Thanks for your feedback!") 
    }
})
);