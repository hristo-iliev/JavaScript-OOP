var shape = (function () {
    var container = document.createElement("canvas");
    container.id = "can";
    container.width = "1000";
    container.height = "800";
    document.body.appendChild(container);

    var canvas = container.getContext('2d');

    function rectangle(x, y, width, height) {
        canvas.strokeRect(x, y, width, height);
    }

    function circle(x, y, radius) {
        canvas.arc(x, y, radius, 0, 2 * Math.PI);
        canvas.stroke();
    }

    function line(x1, y1, x2, y2) {
        canvas.beginPath();
        canvas.moveTo(x1, y1);
        canvas.lineTo(x2, y2);
        canvas.stroke();
    }

    return {
        rectangle: rectangle,
        circle: circle,
        line: line
    };
})();

function my() {

    // Test rectangle
    shape.rectangle(10, 10, 120, 100);

    // Test circle
    shape.circle(80, 300, 70);

    // Test line
    shape.line(10, 500, 255, 530);
}