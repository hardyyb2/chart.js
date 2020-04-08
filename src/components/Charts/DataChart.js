import React from 'react'
import { Line } from 'react-chartjs-2'
import chartdata from '../../dump/chartData'

const data = {
    labels: chartdata.map(dataobj =>
        (new Date(dataobj.date)).getUTCDate()
    ),
    datasets: [{
        label: "Incoming Data",
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        borderCapStyle: 'butt',
        lineTension: 0,
        data: chartdata.map(dataobj =>
            dataobj.data
        ),
    },
    {
        label: "Errors",
        fill: false,
        lineTension: 0,
        borderColor: 'rgb(20,20,206)',
        data: chartdata.map(dataobj =>
            dataobj.error
        )
    }]
}
const options = {
    maintainAspectRatio: false,
    title: {
        display: true,
        text: 'Data Statistics',
        position: 'top',
        fontSize: 25
    }
}

const DataChart = props => {

    return (
        < Line
            data={data}
            options={options}
            height={400}
            width='100%'
        />
    )

}

export default DataChart