var arr2 = [
    ["#id1", "#id2", "#id3", '500', '231', '892', '240'],
    ["#id1", "#id4", "#id7", "514", "219", "514", "597"],
    ["#id2", "#id5", "#id8", "690", "219", "690", "597"],
    ["#id3", "#id6", "#id9", "890", "219", "890", "597"],
    ["#id4", "#id5", "#id6", "500", "411", "892", "420"],
    ["#id7", "#id8", "#id9", "500", "577", "892", "580"],
    ["#id1", "#id5", "#id9", "514", "246", "890", "597"],
    ["#id3", "#id5", "#id7", "890", "219", "514", "570"]
];
var player = ["x", "o"];
var equiv = 0;
var none = 0;
var str = "";
var switchp = 0;
var i = 0;
var name1, name2, move = 0, mode;
$(document).ready(function () {
    $('div.con').hide();
    $('.h2').hide();
    $('.replay').hide();
    $('.startG').on('click', function (event) {
        name1 = document.querySelector('.input1').value;
        name2 = document.querySelector('.input2').value;
        $('.p1').append(name1);
        $('.p2').append(name2);
        $('div.start').hide();
        $('div.con').show();
        $('.h2').show();
    });
    $('.m1p').on('click', function (event) {
        mode = 2;
        $(".input2").prop('disabled', true);
    });
    $('.m2p').on('click', function (event) {
        mode = 1;
    });
    $('.replay').on('click', function (event) {
        equiv = 0; none = 0;
        move = 0;
        $('.row').removeClass("x");
        $('.row').removeClass("o");
        $('.replay').hide();
        $('div.con').show();
        $('p').hide();
    });
    // function action(event) {
    $('.row').on('click', function (event) {
        if (switchp === 0) {
            if ($(this).hasClass("x") || $(this).hasClass("o")) {

            } else {
                if (mode == 1) {
                    $(this).addClass("x");
                    equiv += 1;
                    switchp = 1;
                    checkWinner();

                } else {
                    $(this).addClass("x");
                    equiv += 2;
                    checkWinner();
                    makeAmove()
                }
            }
        }
        else {
            if (mode == 1) {
                if ($(this).hasClass("x") || $(this).hasClass("o")) {

                } else {
                    $(this).addClass("o");
                    switchp = 0;
                    equiv += 1;
                    checkWinner();
                }
            }
        }
    });

    function checkWinner() {
        // console.log(move);
        for (var i = 0; i < arr2.length; i++) {
            // var num = 0; var op1, op2;
            // if (move == 1) {
            var j = 0; var c; var num1 = 0;
            while (j < 2) {
                for (var n = 0; n < 3; n++) {
                    if ($(arr2[i][n]).hasClass(player[j])) {
                        c = player[j];
                        num1 += 1;
                    } else { break; }
                    if (num1 === 3) {
                        none += 1;
                        move = 1;
                        winLine(c, i);
                    }
                }
                j++;
            }
        }
        if (equiv >= 9 && none === 0) {
            str = "Tie";
            result();
        }
    }
    function winLine(player, i) {
        var classS = "svg";
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        var winL = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        svg.setAttribute('width', "1000");
        svg.setAttribute('height', "800");
        winL.setAttribute('x1', arr2[i][3]);
        winL.setAttribute('y1', arr2[i][4]);
        winL.setAttribute('x2', arr2[i][5]);
        winL.setAttribute('y2', arr2[i][6]);
        winL.setAttribute("stroke", "white");
        $("body").append(svg)
        $("svg").addClass(classS);
        $("svg").append(winL);
        if (player === "x") {
            str = name1 + " win!";
            $('.xs').append("x");
        }
        else {
            if (mode == 2) {
                str = "You Lose";
            } else {
                str = name2 + " win!";
            }
            $('.os').append("o");
        }
        result();
    }
    function result() {
        setTimeout(function () {
            $('p').text(str);
            $('div.con').hide();
            $('line').remove();
            $('svg').hide();
            $('p').show();
            $('.replay').show();
        }, 1000);
    }
    function makeAmove() {
        var op1 = ""; var op2 = "";
        for (var i = 0; i < arr2.length; i++) {
            if ($(arr2[i][0]).hasClass("x") && $(arr2[i][1]).hasClass("x") && !$(arr2[i][2]).hasClass("o")) {
                op2 = arr2[i][2];
            } else if ($(arr2[i][0]).hasClass("x") && $(arr2[i][2]).hasClass("x") && !$(arr2[i][1]).hasClass("o")) {
                op2 = arr2[i][1];
            } else if ($(arr2[i][1]).hasClass("x") && $(arr2[i][2]).hasClass("x") && !$(arr2[i][0]).hasClass("o")) {
                op2 = arr2[i][0];
            } else {
                for (var j = 0; j < 3; j++) {
                    if (!$(arr2[i][j]).hasClass("o") && !$(arr2[i][j]).hasClass("x")) {
                        op1 = arr2[i][j];
                    }
                }
            }
        }
        if (move == 0) {
            if (op2 !== "") {
                $(op2).addClass("o");
                checkWinner();
            } else {

                $(op1).addClass("o");
                checkWinner();
            }
        }
        switchp = 0;
        move = 0;
    }
});

