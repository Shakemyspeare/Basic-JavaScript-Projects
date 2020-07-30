document.write(15E311)      //positive infinity
document.write(-15E311)     //negative infinity
document.write(15>5)        //boolean true
document.write(15<5)        //boolean false
console.log(5*5)            //console math
document.write("15" + 1)    //co
console.log(17<2)           //console "false"
document.write("string" == "string")    //boolean comparison "true"
document.write(2 == 5)                  //boolean comparison "false"
document.write("this" === "this")       //data and type comparison "true"
document.write("that" === 15)           //data and type comparison "false"
document.write("15" === 15)             //data same type different comparison "false"
document.write(14 === 15)               //data different type same comparison "false"
document.write(15==15 && 14==14)        //AND operator "true"
document.write(15==15 && 14==13)        //AND operator "false"
document.write(15==15 || 14==13)        //OR operator "ture"
document.write(15==14 || 14==13)        //OR operator "false"

function not_function() {
    document.getElementById("NOT_FUNCTION").innerHTML= !("sample" == "sample")      //not function "false"
}

function D_N() {
    document.getElementById("Double_Negative").innerHTML= !("testing" == "sample")   //not function "true"
}