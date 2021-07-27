@@include('functions/hamburger.js');
@@include('functions/fixed-header.js');
@@include('functions/adaptiveWidth.js');
@@include('functions/smooth-scroll.js');
@@include('functions/modal-window.js');

let ctx = document.getElementById('myChart').getContext('2d');
let ctx2 = document.getElementById('myChart2').getContext('2d');

let labels = ['Chelsea 🍕', 'Atletico Madrid 🌮'];
let colorHex = ['#FB3640', '#EFCA08'];

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [58, 42],
            backgroundColor: colorHex
        }],
        labels: labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
        plugins: {
            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 25,
                backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                },
                font: {
                    weight: 'bold',
                    size: '10'
                },
                formatter: (value) => {
                    return value + ' %';
                }
            }
        }
    }
})

let myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        datasets: [{
            data: [58, 42],
            backgroundColor: colorHex
        }],
        labels: labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
        plugins: {
            datalabels: {
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 25,
                backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                },
                font: {
                    weight: 'bold',
                    size: '10'
                },
                formatter: (value) => {
                    return value + ' %';
                }
            }
        }
    }
})