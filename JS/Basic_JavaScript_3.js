function addition() {
    var Add = 4 + 2;
    document.getElementById("Math").innerHTML = "4 plus 2 = " + Add;
}

function sub() {
    var subtract = 4-2;
    document.getElementById("More_Math").innerHTML = "4 minus 2 = " + subtract;
}

function multi() {
    var multiplication = 4 * 2;
    document.getElementById("Some_More").innerHTML = "4 multiplied by 2 = " + multiplication;
}

function divi() {
    var division = 4 / 2;
    document.getElementById("Additional_Math").innerHTML = "4 divided by 2 = " + division 
}

function multimath() {
    var many_numbers = (4+2) / 4 * 2;
    document.getElementById("Many_Maths").innerHTML = "4 plus 2 then divided by 4 and then multiplied by 2 = " + many_numbers;
}

function modulus() {
    var mod = 17 % 3
    document.getElementById("Another_example").innerHTML = "The remainder of 17 divided by 3 = " + mod;
}

function negative() {
    var positive = 15;
    document.getElementById("unary_operator").innerHTML = "The negative of 15 = " + -positive;
}

function increm() {
    var a = 4;
    a++
    document.getElementById("increment").innerHTML = a
}

function decrem() {
    var b = 4;
    b--
    document.getElementById("decrement").innerHTML = b
}

function Random_Num() {
    var Rand = (Math.random() * 50);
    document.getElementById("Random_number").innerHTML = Rand
}

function Whole_Rand_Num() {
    var Rand_int = (Math.random() * 50);
    document.getElementById("Random_Integer").innerHTML = Math.round(Rand_int);
}