function button1() {
    const name = document.getElementById('a').value;
    alert(name);
}


function nam() {
    var x = document.getElementById("a").value
    if (x == "") {
        document.getElementById("aa").innerHTML = "please enter the field"
    }




}
function usert() {
    var x = document.getElementById("b").value
    if (x == "") {
        document.getElementById("bb").innerHTML = "please enter the field"
    }




}
function pa() {
    var z = document.getElementById("d").value
    var b = z.length;
    if (b <= 4) {
        document.getElementById("dd").innerHTML = "password is short "
    }
    else if (b < 7) {
        document.getElementById("dd").innerHTML = "password is decent but change it"
    }
    else {
        document.getElementById("dd").innerHTML = "valid password"
    }




}
function cb() {
    var xx = document.getElementById("f").value
    var yy = document.getElementById("d").value
    if (xx == yy) {
        document.getElementById("ff").innerHTML = ""
    }

    else {
        document.getElementById("ff").innerHTML = "incorrect"
    }


}
function dv() {
    var zz = document.getElementById("d")
    if (zz.type == "password") {
        zz.type = "text"
    }
    else {
        zz.type = "password"
    }

}
function ph() {

    var abc = document.getElementById("h").value
    var len = abc.length;
    if (len < 10) {
        document.getElementById("hh").innerHTML = "this phone number is invalid"
    }
}
function ef() {
    var aa = document.getElementById("f")
    if (aa.type == "password") {
        aa.type = "text"
    }
    else {
        aa.type = "password"
    }

}

function changecolor() {
    document.body.style.backgroundColor = "lightblue";
}
