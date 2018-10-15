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
$(document).ready(function () {
    var switchp = 0;
    $('.row').on('click', function (event) {
        if (switchp === 0) {
            $(this).addClass("x");
            switchp = 1;
        }
        else {
            $(this).addClass("o");
            switchp = 0;
        }
        $(this).off();
        checkWinner();
        equiv++;
    });
    function checkWinner() {
        console.log(equiv);
        for (var i = 0; i < arr2.length; i++) {
            for (var j = 0; j < player.length; j++) {
                if ($(arr2[i][0]).hasClass(player[j]) && $(arr2[i][1]).hasClass(player[j])
                    && $(arr2[i][2]).hasClass(player[j])) {
                    // console.log("sucssuss");
                    winLine(player[j], i);
                    none++;
                }
            }
        }
        if (equiv == 8 && none == 0) {
            setTimeout(function () {
                $('div.con').hide();
                $('svg').hide();
                $('p').append("Equivalent");
            }, 5000);
        }
    }
    function winLine(player, i) {
        $('div').off();
        setTimeout(function () {
            $('p').append(str);
            $('div.con').hide();
            $('svg').hide();
        }, 5000);
        // var x1 = "110"; var y1 = "110";
        // var x2 = "117"; var y2 = "500"; var classL = "";
        var classS = "svg";
        var winL = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        console.log("fg");
        // if (i === 7) {
        //     x1 = 880;
        //     y1 = 169;
        //     x2 = 482;
        //     y2 = 533;
        //     classS = "svg1";
        // } else if (i === 6) {
        //     x1 = 110;
        //     y1 = 110;
        //     x2 = 500;
        //     y2 = 475;
        // }

        winL.setAttribute('x1', arr2[i][3]);
        console.log("fg");
        winL.setAttribute('y1', arr2[i][4]);
        console.log("fg");
        // if ((i === 4) || (i === 5) || (i === 0)) {
        //     x2 = "800"; y2 = "110";
        //     console.log("rgthjk")
        // }
        // switch (i) {
        //     case 4:
        //         classL = "line2";
        //         break;
        //     case 5:
        //         classL = "line3";
        //         break;
        //     case 2:
        //         classL = "line4";
        //         break;
        //     case 3:
        //         classL = "line5";
        //         break;
        //     default:

        // }
        // // winL.setAttribute('class', classL);
        winL.setAttribute('x2', arr2[i][5]);
        console.log("fg");
        winL.setAttribute('y2', arr2[i][6]);
        console.log("fg");
        winL.setAttribute("stroke", "black");
        console.log("fg");
        $("svg").addClass(classS);
        // $("svg").addClass(classL);
        $("svg").append(winL);
        console.log("fg");
        if (player === "x") {
            str = "p1 win";
        }
        else {
            str = "p2 win";

        }

    }

});
