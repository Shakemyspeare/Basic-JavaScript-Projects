function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function Sibling(Name,Age, Occupation, Height, Location) {
    this.Sibling_Name = Name
    this.Sibling_Age = Age;
    this.Sibling_Occupation = Occupation;
    this.Sibling_Height = Height;
    this.Sibling_Location = Location;
}
var Zack = new Sibling("Zack", 33, "Unemployed", "Six foot one inch", "San Diego");
var Greg = new Sibling("Greg", 36, "CTO of Payfone", "Five foot ten inches", "Denver")
var Shane = new Sibling("Shane", 25, "Pharmacy Tech", "Six foot five inches", "Denver")
var Max = new Sibling("Max", 24, "Army Staff Sargent", "Six foot six inches", "Georgia")
function Sibling_checkin() {
    document.getElementById("New_and_This").innerHTML = "Hey guys it's your brother " + Zack.Sibling_Name + " !" +
    " Just so everyone is on the same page, I am still in " + Zack.Sibling_Location + "."
}

function testing() {
    document.getElementById("Nested_Function").innerHTML = test()
    function test() {
        var sample_string = "testing 1 2 "
        function Concatenate() {sample_string += "3!"}
        Concatenate();
        return sample_string;
    }
}