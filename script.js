var count = 0;
var a;

function function1() {
    count++;
    document.getElementById("button").innerHTML = "press " + count;
    var rannum = Math.floor(Math.random() * 6) + 1;

    switch (rannum) {
        case 1:
            document.getElementById("bottomleft").style.opacity = 0;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topright").style.opacity = 0;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            break;
        case 2:
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            break;
        case 3:
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 0;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 0;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            break;
        case 4:
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 0;
            break;
        case 5:
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 0;
            document.getElementById("middleright").style.opacity = 0;
            document.getElementById("middle").style.opacity = 1;
            break;
        case 6:
            document.getElementById("topright").style.opacity = 1;
            document.getElementById("topleft").style.opacity = 1;
            document.getElementById("bottomleft").style.opacity = 1;
            document.getElementById("bottomright").style.opacity = 1;
            document.getElementById("middleleft").style.opacity = 1;
            document.getElementById("middleright").style.opacity = 1;
            document.getElementById("middle").style.opacity = 0;
            break;
    }

}