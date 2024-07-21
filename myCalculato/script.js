document.addEventListener("DOMContentLoaded", function() {
    const outputElement = document.getElementById("output");
    let expression = "";

    function output(value) {
        outputElement.textContent = value;
    }

    function buttonClick(value) {
        expression += value;
        output(expression);
    }

    function calculate() {
        try {
            const result = eval(expression);
            output(result);
            expression = result.toString();
        } catch (error) {
            output("Error");
            expression = "";
        }
    }

    document.getElementById("b0").addEventListener("click", () => {
        buttonClick("0");
    });

    document.getElementById("b1").addEventListener("click", () => {
        buttonClick("1");
    });

    document.getElementById("b2").addEventListener("click", () => {
        buttonClick("2");
    });

    document.getElementById("b3").addEventListener("click", () => {
        buttonClick("3");
    });

    document.getElementById("b4").addEventListener("click", () => {
        buttonClick("4");
    });

    document.getElementById("b5").addEventListener("click", () => {
        buttonClick("5");
    });

    document.getElementById("b6").addEventListener("click", () => {
        buttonClick("6");
    });

    document.getElementById("b7").addEventListener("click", () => {
        buttonClick("7");
    });

    document.getElementById("b8").addEventListener("click", () => {
        buttonClick("8");
    });

    document.getElementById("b9").addEventListener("click", () => {
        buttonClick("9");
    });

    document.getElementById("bac").addEventListener("click", () => {
        expression = "";
        output("");
    });

    document.getElementById("br").addEventListener("click", () => {
        buttonClick("%");
    });

    document.getElementById("bd").addEventListener("click", () => {
        buttonClick("/");
    });


    document.getElementById("bm").addEventListener("click", () => {
        buttonClick("*");
    });

    document.getElementById("badd").addEventListener("click", () => {
        buttonClick("+");
    });

    document.getElementById("bsub").addEventListener("click", () => {
        buttonClick("-");
    });

    document.getElementById("bequal").addEventListener("click", () => {
        calculate();
    });

    document.getElementById("bpoint").addEventListener("click", () => {
        buttonClick(".");
    });

    document.getElementById("bm10").addEventListener("click", () => {
        buttonClick("*10");
    });

    document.getElementById("bcancle").addEventListener("click", () => {
        expression = expression.slice(0, -1);
        output(expression);
    });
});
