'use client'

import React, { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'

function RadharChart() {
    const chartRef = useRef < any > (null)
    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }
            const context = chartRef.current.getContext('2d');
            const newChart = new Chart(context, {
                type: "bar",
                data: {
                    labels: ['', '', '', '', '', '', ''],
                    datasets: [
                        {
                            label: "Info",
                            data: [34, 64, 23, 34, 89, 12],
                            borderRadius: Number.MAX_VALUE,
                            borderSkipped: false,
                            backgroundColor: [
                                "blue",
                            ],
                        },
                    ]
                },
                options: {
                    responsive :true,
                    plugins: {
                    //    la
                      }
                    // indexAxis: 'y',
                    // responsive: true,
                    // plugins:{

                    // }
                }
            })
            chartRef.current.chart = newChart
        }
    }, []);
    return (
        <div
            style={{
                position: "relative",
                width: "90vw",
                height: "80vh"
            }}
        >
            <canvas ref={chartRef} />
        </div>
    )
}

export default RadharChart