// Fetch COVID-19 global historical data (last 30 days) and render chart
fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=30')
  .then(response => response.json())
  .then(data => {
    const cases = data.cases;
    const deaths = data.deaths;
    const recovered = data.recovered;

    // Extract dates (labels) and counts for each dataset
    const labels = Object.keys(cases);
    const casesData = Object.values(cases);
    const deathsData = Object.values(deaths);
    const recoveredData = Object.values(recovered);

    const ctx = document.getElementById('covidChart').getContext('2d');

    const covidChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Cases',
            data: casesData,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            tension: 0.1,
          },
          {
            label: 'Deaths',
            data: deathsData,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.1,
          },
          {
            label: 'Recovered',
            data: recoveredData,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'COVID-19 Cases, Deaths & Recoveries (Last 30 Days)' },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 500000 },
          },
        },
      },
    });
  })
  .catch(error => {
    console.error('Error fetching COVID-19 data:', error);
    alert('Failed to load COVID-19 data. Please try again later.');
  });
