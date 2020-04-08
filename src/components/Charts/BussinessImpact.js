import React from 'react'
import { Doughnut, Chart } from 'react-chartjs-2'

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
    draw: function () {
        originalDoughnutDraw.apply(this, arguments);

        var chart = this.chart.chart;
        var ctx = chart.ctx;
        var width = chart.width;
        var height = chart.height;

        var fontSize = (height / 214).toFixed(2);
        ctx.font = fontSize + "em Verdana";
        ctx.textBaseline = "middle";

        var text = chart.config.data.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

        ctx.fillText(text, textX, textY);
    }
});


const data = {
    labels: ["High ", "Medium", "Low"],

    datasets: [{
        backgroundColor: ["red", "orange", "yellow"],
        weight: 3,
        data: [50, 25, 25]
    }],

    text: '$16m'
}

const options = {
    cutoutPercentage: 85,
    maintainAspectRatio: false,
    title: {
        display: true,
        text: 'Business Impact',
        position: 'top',
        fontSize: 20
    }
}

const BusinessImpact = props => {

    return (
        < Doughnut
            data={data}
            options={options}
            height={300}
            width={200}
        />

    )

}

export default BusinessImpact