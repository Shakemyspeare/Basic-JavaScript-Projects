function Time_function() {                                      //Defining function 
    var Time = new Date().getHours();                           //Assigning the variable "Time" the hour of the day
    var Reply;                                                  //Assigning the variable "Reply"...
    if (Time < 12 == Time > 0) {                                //If the var "Time" is less than 12 but greater than 0 assign morning to "Reply"
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {                          //If the var "Time" is greater than 12 but less than 18 assign afternoon to "Reply"
        Reply = "It is the afternoon.";
    }
    else (
        Reply = "It is evening time."                           //If the var "Time" is anything else assign evening to "Reply"
    )
    document.getElementById("Time_of_day").innerHTML = Reply    //Display "Reply" in teh "Time_of_day" element Id.
}