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

    // chart.background().stroke("3 #ff4747");
    chart.background().fill({
        keys: ["#CECECE"],
        angle: 130,
    });

    // set the chart title
    chart.title("Who is the winner?");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('container');
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

    // chart.background().stroke("3 #ff4747");
    chart.background().fill({
        keys: ["#CECECE"],
        angle: 130,
    });

    // set the chart title
    chart.title("Will both score?");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('container__two');
    chart.draw();

});