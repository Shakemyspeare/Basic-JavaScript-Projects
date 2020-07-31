function test_concat() {
    var one= "This is ";
    var two= "a test ";
    var three= "and I hope it works!";
    var sentence = one.concat(two, three);
    document.getElementById("Test_Concat").innerHTML = sentence;
}

function slice_Method() {
    var Sentence = "To be or not to be that is the question.";
    var Section = Sentence.slice(6,18);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_case() {
    var text = document.getElementById("Upper").innerHTML;
    var rogue = text.search("rogue");
    document.getElementById("Rogue").innerHTML = rogue;
    document.getElementById("Upper").innerHTML = text.toUpperCase();
}

function Make_a_string() {
    var x = 2;
    var y = 3;
    var z = x + y;
    document.getElementById("Result").innerHTML = z.toString();
}

function Precision_Method() {
    var a = 5.236984;
    document.getElementById("P_Method").innerHTML = a.toPrecision(3);
}

function To_Fixed_Method() {
    var a = 5.236984;
    document.getElementById("TF_Method").innerHTML = a.toFixed(2);
}