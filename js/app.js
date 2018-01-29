$(document).ready(function() {
    function multiply(num1, num2) {
        var total = num1 * num2;
        return total;
    }

    function add(peram1, peram2) {
        var total = peram1 + peram2;
        $("body").append("<div>" + total + "</div>");
    }

    add(multiply(2, 4), 5);
    add(multiply(4, 4), multiply(1, 5));
});