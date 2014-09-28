var domModule = (function () {

    var store = [];
    var docF = document.createDocumentFragment();

    function appendChild(element, selector) {
        document.querySelector(selector).appendChild(element);
    }

    function removeChild(element, selector) {
        document.querySelector(selector).removeChild(element);
    }

    function addHandler(selector, event, eventHandler) {
        document.querySelector(selector).addEventListener(event, eventHandler);
    }

    function appendToBuffer(selector, element) {
        var index = -1;
        var len = store.length;
        for (var i = 0; i < len; i++) {
            if (store[i].name == selector) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            store.push({ name: selector, container: docF.cloneNode(true) });
            store[store.length - 1].container.appendChild(element);
        } else {
            store[index].container.appendChild(element);

            if (store[index].container.childElementCount === 100) {
                var con = store[index].container;

                document.querySelector(selector).appendChild(con);
                store[index].container = docF.cloneNode(true);
            }
        }
    }

    function getElements(selector) {
        return document.querySelectorAll(selector);
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        appendToBuffer: appendToBuffer,
        getElements: getElements
    };
})();

function my() {
    var div = document.createElement("div");
    div.innerHTML = "NEW DIV !!!!!!";

    var p = document.createElement("p");
    p.innerHTML = "Some Text, Text, Text!";

    var p2 = document.createElement("p");
    p2.innerHTML = "Another Paragraph!";

    // Test appendChild
    domModule.appendChild(div, "#wrapper");
    domModule.appendChild(p, "#wrapper");
    domModule.appendChild(p2, "#wrapper");

    // Test removeChild
    domModule.removeChild(div, "#wrapper");

    // Test addHandler
    domModule.addHandler("p", "click", function () { alert("It Works!"); });

    // Test getElements
    var elements = domModule.getElements("p");
    console.log(elements);
        
    // Test appendToBuffer
    var span = document.createElement("span");

    for (var i = 1; i < 102; i++) {
        var span2 = span.cloneNode(true);
        span2.innerText = i + " ";
        domModule.appendToBuffer("#wrapper", span2);
    }
}