function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;    
}

function calculate() {
    var p = document.getElementById("result").value;
    try {
        var q = new Function('return ' + p)();
        document.getElementById("result").value = q;
    } catch (e) {
        document.getElementById("result").value = "Erro!";
    }
}

document.addEventListener("keydown", function(event) {
    var key = event.key;

    if (key >= "0" && key <= "9" || key === "+" || key === "-" || key === "*" || key === "/" || key === ".") {
        display(key);
    }

    if (key === "Enter") {
        calculate();
    }

    if (key === "Backspace") {
        var currentValue = document.getElementById("result").value;
        document.getElementById("result").value = currentValue.slice(0, -1);
    }

    if (key === "Escape") {
        clearScreen();
    }
});