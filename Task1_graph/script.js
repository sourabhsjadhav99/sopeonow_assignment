
var options = {
    series: [{
        name: 'Discharges by Interval',
        type: 'column',
        data: [0, 1, 16, 11, 5, 2, 0, 0, 0, 0],
        color: '#ff9999'

    }, {
        name: 'Average Time',
        type: 'line',
        data: [0, 2.18, 2.57, 2.32, 1.45, 0, 0, 0, 0, 0],
        color: '#20077a',

    }],
    //---
    chart: {
        height: 450,
        width: '100%',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    //---
    stroke: {
        curve: 'smooth',
        width: [0, 2.5]
    },
    //---
    xaxis: {
        title: {
            text: 'Time Interval',
            style: {
                fontSize: '18px'
            }
        },
        labels: {
            style: {
              fontSize: '14px'
            }
          },
        categories: ['12AM-06AM', '06AM-08AM', '08AM-10AM', '10AM-12PM', '12PM-02PM', '02PM-04PM', '04PM-06PM', '06PM-08PM', '08PM-10PM', '10PM-12AM'],
    },
    yaxis: [{
        title: {
            text: 'Discharges by Interval',
            style: {
                fontSize: '18px'
            }
        },
        labels: {
            style: {
              fontSize: '14px'
            }
          },

    }, {
        opposite: true,
        title: {
            text: 'Average Time',
            style: {
                fontSize: '18px'
            }
        }
    }],
    dataLabels: {
        enabled: true,
        style: {
            fontSize: '15px',
        },

    },
    plotOptions: {
        bar: {
            horizontal: false,
            dataLabels: {
                position: 'bottom',
            }
        },
    },
}

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
