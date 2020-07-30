function my_Dictionary() {
    var Older_Brother = {
        Name:"Greg",
        Age:36,
        Occupation:"CTO of Payfone",
        Height:"5'10\"",
    }
    delete Older_Brother.Height
    document.getElementById("Dictionary").innerHTML = Older_Brother.Height;
}