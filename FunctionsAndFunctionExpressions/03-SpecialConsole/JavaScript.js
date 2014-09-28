var specialConsole = (function () {

    function writeLine() {
        format(arguments);
    }

    function writeError() {
        format(arguments);
    }

    function writeWarning() {
        format(arguments);
    }

    function format(items) {
        if (items.length == 1) {
            console.log(items[0]);
        } else {
            while (true) {
                for (var i = 1; i < items.length; i++) {
                    items[0] = items[0].replace(("{" + (i - 1) + "}"), items[i]);
                }
                if (items[0].indexOf("{") < 0) {
                    break;
                }
            }

            console.log(items[0]);
        }
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    };

})();

function my() {
    console.log("1 writeLine:");
    specialConsole.writeLine("Message: hello");
    console.log("2 writeLine using format:");
    specialConsole.writeLine("Message: {0}", "hello");

    console.log("------------------");
    console.log("3 writeError:");
    specialConsole.writeLine("Error: Something happened");
    console.log("4 writeError using format:");
    specialConsole.writeLine("Error: {0}", "Something happened");

    console.log("------------------");
    console.log("5 writeWarning:");
    specialConsole.writeLine("Warning: A warning");
    console.log("6 writeWarning using format:");
    specialConsole.writeLine("Warning: {0}", "A warning");
}