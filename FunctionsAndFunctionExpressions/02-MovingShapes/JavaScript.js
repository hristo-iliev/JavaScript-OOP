var movingShapes = (function () {

    var div = document.createElement("div");
    div.style.width = "30px";
    div.style.height = "30px";
    div.style.borderRadius = "10px";
    div.style.position = "absolute";
    div.style.textAlign = "center";
    div.style.verticalAlign = "middle";

    var red = "";
    var green = "";
    var blue = "";
    function add(type) {
        var div2 = div.cloneNode(true);
        red = generateRandomNumber(0, 255);
        green = generateRandomNumber(0, 255);
        blue = generateRandomNumber(0, 255);
        div2.style.backgroundColor = "rgb(" + red + "," + green + ", " + blue + ")";

        red = generateRandomNumber(0, 255);
        green = generateRandomNumber(0, 255);
        blue = generateRandomNumber(0, 255);
        div2.style.border = "5 px solid" + "rgb(" + red + "," + green + ", " + blue + ")";

        if (type == "ellipse") {
            div2.innerHTML = "<b>C</b>";
            document.getElementById("circular").appendChild(div2);
        } else {
            div2.innerHTML = "<b>R</b>";
            document.getElementById("rectangular").appendChild(div2);
        }
        
    }

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {add: add};

})();

function rect() {
    movingShapes.add("rect");
}

function cir() {
    movingShapes.add("ellipse");
}