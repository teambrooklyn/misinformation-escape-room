import React from "react";
import { Bar } from "react-chartjs-2";

const Histogram = (props) => {
  return (
    <div style={{ maxWidth: "800px" }}>
      <Bar
        data={{
          labels: props.labels,
          datasets: [
            {
              label: props.unit,
              data: props.data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: [
              {
                title: {
                  display: true,
                  text: "Your Title",
                },
              },
            ],
            xAxes: [
              {
                categoryPercentage: 1.0,
                barPercentage: 1.0,
              },
            ],
          },

          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
}

export default Histogram;