import { Chart, registerables } from 'chart.js';

// Register the necessary components
Chart.register(...registerables);

interface WeatherData {
    day: number;
    max_temp: number;
    min_temp: number;
    mean_temp: number;
    heat_deg_days: number;
    cool_deg_days: number;
    total_rain: number;
    total_snow: number;
    total_precip: number;
}

async function fetchWeatherData(): Promise<WeatherData[]> {
    try {
        const response = await fetch('../data/weather-data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return [];
    }
}

async function plotWeatherData() {
    try {
        const weatherData = await fetchWeatherData();
        if (weatherData.length === 0) {
            throw new Error('No weather data available');
        }

        const days = weatherData.map(data => data.day);
        const maxTemps = weatherData.map(data => data.max_temp);
        const minTemps = weatherData.map(data => data.min_temp);

        const ctx = document.getElementById('weatherChart') as HTMLCanvasElement;
        if (!ctx) {
            throw new Error('Canvas element not found');
        }

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: days,
                datasets: [
                    {
                        label: 'Max Temperature',
                        data: maxTemps,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: false,
                    },
                    {
                        label: 'Min Temperature',
                        data: minTemps,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        fill: false,
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Day',
                            font: {
                                size: 16 // Increased font size
                            },
                            color: '#333' // Improved contrast
                        },
                        ticks: {
                            font: {
                                size: 14 // Increased font size
                            },
                            color: '#333' // Improved contrast
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Temperature (°C)',
                            font: {
                                size: 16 // Increased font size
                            },
                            color: '#333' // Improved contrast
                        },
                        ticks: {
                            font: {
                                size: 14 // Increased font size
                            },
                            color: '#333' // Improved contrast
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 14 // Increased font size
                            },
                            color: '#333' // Improved contrast
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error plotting weather data:', error);
    }
}

plotWeatherData();