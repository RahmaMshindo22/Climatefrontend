import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './Analytics.css';

Chart.register(...registerables);

const Analytics = () => {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const lineChartInstance = useRef(null);
  const barChartInstance = useRef(null);

  useEffect(() => {
    const renderLineChart = () => {
      if (lineChartInstance.current) {
        lineChartInstance.current.destroy();
      }

      lineChartInstance.current = new Chart(lineChartRef.current, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Monthly Sales',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'category'
            },
            y: {
              type: 'linear'
            }
          }
        }
      });
    };

    const renderBarChart = () => {
      if (barChartInstance.current) {
        barChartInstance.current.destroy();
      }

      barChartInstance.current = new Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: 'Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: 'category'
            },
            y: {
              type: 'linear',
              beginAtZero: true
            }
          }
        }
      });
    };

    renderLineChart();
    renderBarChart();

    return () => {
      if (lineChartInstance.current) lineChartInstance.current.destroy();
      if (barChartInstance.current) barChartInstance.current.destroy();
    };
  }, []);

  return (
    <div className="analytics-container">
      <h2>Analytics</h2>
      <div className="chart-container">
        <canvas ref={lineChartRef} id="lineChart"></canvas>
      </div>
      <div className="chart-container">
        <canvas ref={barChartRef} id="barChart"></canvas>
      </div>
    </div>
  );
};

export default Analytics;
