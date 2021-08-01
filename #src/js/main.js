@@include('functions/hamburger.js');
@@include('functions/fixed-header.js');
@@include('functions/adaptiveWidth.js');
@@include('functions/smooth-scroll.js');
@@include('functions/modal-window.js');

anychart.onDocumentReady(function () {

    // set the data
    var data = [
        {
            x: "Chelsea",
            value: 58,
            normal: {
                fill: "#0400B6"
            }
        },
        {
            x: "Atletico Madrid",
            value: 42,
            normal: {
                fill: "#E40E0E"
            }
        }
    ];

    // create the chart
    var chart = anychart.pie();

    chart.background().stroke("3 #0c1149");
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    });

    // set the chart title
    chart.title("Who is the winner?");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('winner');
    chart.draw();




    // set the data
    var data = [
        {
            x: "Yes",
            value: 17,
            normal: {
                fill: "#0400B6"
            }
        },
        {
            x: "No",
            value: 73,
            normal: {
                fill: "#E40E0E"
            }
        }
    ];

    // create the chart
    var chart = anychart.pie();

    chart.background().stroke("3 #0c1149");
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    });

    // set the chart title
    chart.title("Will both score?");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('score');
    chart.draw();



    // set the data
    var data = [
        {
            x: "Yes",
            value: 43,
            normal: {
                fill: "#0400B6"
            }
        },
        {
            x: "No",
            value: 57,
            normal: {
                fill: "#E40E0E"
            }
        }
    ];

    // create the chart
    var chart = anychart.pie();

    chart.background().stroke("3 #0c1149");
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    });

    // set the chart title
    chart.title("The total is more 2.5");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('total');
    chart.draw();





    // set the data
    var data = [
        {
            x: "2:1",
            value: 35,
            normal: {
                fill: "#0400B6"
            }
        },
        {
            x: "2:0",
            value: 27,
            normal: {
                fill: "#E40E0E"
            }
        },
        {
            x: "1:0",
            value: 19,
            normal: {
                fill: "#DF970A"
            }
        },
        {
            x: "3:1",
            value: 11,
            normal: {
                fill: "#FECA67"
            }
        },
        {
            x: "3:0",
            value: 7,
            normal: {
                fill: "#FBFE67"
            }
        }
    ];

    // create the chart
    var chart = anychart.pie();

    chart.background().stroke("3 #0c1149");
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    });

    // set the chart title
    chart.title("Final score");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('goals');
    chart.draw();

});


const icon = document.querySelector('.team__icon')
const team = document.querySelector('.team__name')

icon.onmouseover = function (e) {
    team.style.color = '#000'
    team.style.transition = '.3s'
}

icon.onmouseout = function (e) {
    team.style.color = ''
}