anychart.onDocumentReady(function () {
    function pie1() {
        // ----- The first pie -----
        // set the data
        var data = [{
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
        }]
        // create the chart
        var chart = anychart.pie()
        chart.background().stroke("3 #0c1149")
        chart.background().fill({
            keys: ["#fff"],
            angle: 130,
        })
        // set the chart title
        chart.title("Who is the winner?")
        // add the data
        chart.data(data)
        // display the chart in the container
        chart.container('atl-che_winner')
        chart.draw()
    }

    function pie2() {
        // ----- The second pie -----
        // set the data
        var data = [{
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
        }]
        // create the chart
        var chart = anychart.pie()
        chart.background().stroke("3 #0c1149")
        chart.background().fill({
            keys: ["#fff"],
            angle: 130,
        })
        // set the chart title
        chart.title("Will both score?")
        // add the data
        chart.data(data)
        // display the chart in the container
        chart.container('atl-che_score');
        chart.draw();
    }

    function pie3() {
        // ----- The third pie -----
        // set the data
        var data = [{
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
        }]
        // create the chart
        var chart = anychart.pie()
        chart.background().stroke("3 #0c1149")
        chart.background().fill({
            keys: ["#fff"],
            angle: 130,
        })
        // set the chart title
        chart.title("The total is more 2.5")
        // add the data
        chart.data(data)
        // display the chart in the container
        chart.container('atl-che_total')
        chart.draw()
    }

    function pie4() {
        // ----- The fourth pie -----
        // set the data
        var data = [{
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
        }]
        // create the chart
        var chart = anychart.pie()
        chart.background().stroke("3 #0c1149")
        chart.background().fill({
            keys: ["#fff"],
            angle: 130,
        })
        // set the chart title
        chart.title("Final score")
        // add the data
        chart.data(data)
        // display the chart in the container
        chart.container('atl-che_goals')
        chart.draw()
    }

    pie1()
    pie2()
    pie3()
    pie4()
})

let dataTeams = {
    card_left: {
        data: [{
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
        }],
        containerWinner: 'atl-che_winner',
    },
    card_middle: [],
    card_right: [],
}