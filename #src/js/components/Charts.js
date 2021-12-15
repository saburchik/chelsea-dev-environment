
anychart.onDocumentReady(function () {
    // ----- The first pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("Who is the winner?")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('atl-che_winner')
    chart.draw()

    // ----- The second pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("Will both score?")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('atl-che_score');
    chart.draw();

    // ----- The third pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("The total is more 2.5")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('atl-che_total')
    chart.draw()

    // ----- The fourth pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("Final score")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('atl-che_goals')
    chart.draw()
})

anychart.onDocumentReady(function () {
    // ----- The first pie -----
    // == Set the data:
    var data = [{
        x: "Chelsea",
        value: 58,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "Manchester United",
        value: 42,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("Who is the winner?")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('che-mu_winner')
    chart.draw()

    // ----- The second pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("Will both score?")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('che-mu_score');
    chart.draw();

    // ----- The third pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("The total is more 2.5")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('che-mu_total')
    chart.draw()

    // ----- The fourth pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("Final score")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('che-mu_goals')
    chart.draw()
})

anychart.onDocumentReady(function () {
    // ----- The first pie -----
    // == Set the data:
    var data = [{
        x: "Chelsea",
        value: 58,
        normal: {
            fill: "#0400B6"
        }
    },
    {
        x: "Liverpool",
        value: 42,
        normal: {
            fill: "#E40E0E"
        }
    }]
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("Who is the winner?")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('liv-che_winner')
    chart.draw()

    // ----- The second pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("Will both score?")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('liv-che_score');
    chart.draw();

    // ----- The third pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("The total is more 2.5")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('liv-che_total')
    chart.draw()

    // ----- The fourth pie -----
    // == Set the data:
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
    // == Create the chart:
    var chart = anychart.pie()
    chart.background().stroke("3 #0c1149")
    chart.background().fill({
        keys: ["#fff"],
        angle: 130,
    })
    // == Set the chart title:
    chart.title("Final score")
    // == Add the data:
    chart.data(data)
    // == Display the chart in the container:
    chart.container('liv-che_goals')
    chart.draw()
})