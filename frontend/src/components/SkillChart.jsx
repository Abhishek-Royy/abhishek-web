import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const state = {
  labels: [
    'HTML',
    'JAVASCRIPT',
    'REACT JS',
    'PYTHON',
    'MONGODB',
    'GITHUB',
    'NODE JS',
  ],
  datasets: [
    {
      label: 'Class Strength',
      backgroundColor: [
        'Indigo',
        'Purple',
        'Yellow',
        'Teal',
        'Red',
        'Navy',
        'Brown',
      ],
      data: [19, 14, 21, 17, 13, 10, 6],
    },
  ],
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title: {
              display: true,
              text: 'Class Strength',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    )
  }
}
