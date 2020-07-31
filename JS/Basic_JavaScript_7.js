Another_String = "Hello, World!";               //Global variable
function Testing() {                            //function that calls both the local and global variables
    Sample_String = "This is my sample! ";
    document.getElementById("Sample").innerHTML = Sample_String + Another_String;
}

function Testing_2() {                          //function that calls the global variable but also the variable from "Testing" function
    document.getElementById("Sample_2").innerHTML = Sample_String + Another_String;
}

function Get_to_Bed() {                         //Determins the time of day and if it is before 8pm asks how you are doing, else tells you to go to bed.
    if (new Date().getHours() > 20) {
    document.getElementById("Date_Time").innerHTML = "Go to bed!!";
    }
    else
    document.getElementById("Date_Time").innerHTML = "How are you?";
}

function Drinking_Age() {                                           //Defining the functions name
    Age = document.getElementById("Age").value;                     //Defining the variable "Age" the the "Age" Id and getting the value from the entry
    if(Age >= 21) {                                                 //If the value from the entry is equal to or greater than 21 it outputs that you are old enough to drink
        Drink = "You are old enough to drink!";
    }
    else {                                                          //If the value from the entry is less than 21 it outputs that you are not old enough
        Drink = "You are not old enough! Go home!";
    }
    document.getElementById("Drinking_age").innerHTML = Drink;      //Displays desired output in the "Drinking_age" Id.
}