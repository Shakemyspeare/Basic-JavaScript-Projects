function Call_Loop() {
    var name = "Zack"
    var counter = 1
    var num = ""
    while (name.length >= counter) {
        num += "<br>" + counter;
        counter++;
    }
    document.getElementById("Loop").innerHTML = "We are counting the letters in the name Zack " + num;
}

var Instruments = ["Guitar", "Drums", "Piano", "Base", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

var sample_Array = ["Zack", "Irine", "Mojo", "Jerrie"];
var Output = ""
var X;
function array_Function() {
    for (X = 0; X < sample_Array.length; X++) {
    Output += sample_Array[X] + ", "
    }
    document.getElementById("Array").innerHTML = Output
}

function constant_function() {
    const family = {relationship:"father", age:"33", height:"6 foot"}
    family.relationship= "mother";
    family.height="5 foot three inches";
    document.getElementById("Constant").innerHTML = "Irine is Mojo's " + family.relationship +
    " and she is " + family.height + " tall."
}

function let_key() {
    let Instruments = "Tuba"
    document.getElementById("let_keyword").innerHTML = "I used the let keyword to get " + Instruments + " from the" +
    " variable Instruments even though it was defined earlier with different values."
}

let phone = {
    make: "Samsung",
    model: "S10+",
    year_purchased: "2019",
    accessories: "Otter Box",
    description: function() {
        return "My phone is a " + this.make + " " + this.model + " and I bought it in " + this.year_purchased + " with an " + this.accessories + ".";
        }
}
document.getElementById("MY_PHONE").innerHTML = phone.description();


function test_break() {
    var text = "";
    var x;
    for (x = 0; x < 5; x++) {
        if (x === 4) {break;}
        text += "The number is " + x + "<br>";
    }
    document.getElementById("Testing").innerHTML = text
}

function test_continue() {
    var text = "";
    var x;
    for (x = 0; x < 6; x++) {
        if (x === 4) {continue;}
        text += "The number is " + x + "<br>";
    }
    document.getElementById("Continue").innerHTML = text
}