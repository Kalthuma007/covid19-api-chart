# 🦠 COVID-19 API Chart

This project is a simple web app that fetches real-time global COVID-19 data from a public API and visualizes it using **Chart.js**. It displays the number of confirmed cases, deaths, and recoveries over the last 30 days in a line chart.


## 📊 Features
- Real-time COVID-19 data (last 30 days)
- Line chart of cases, deaths, and recoveries
- Responsive layout with basic styling
- Built using HTML, CSS, and vanilla JavaScript

## 📦 Tools & Libraries
- [Chart.js](https://www.chartjs.org/) – for rendering charts
- [Disease.sh API](https://disease.sh/docs/#/) – free COVID-19 data

## 📁 Project Structure
```
covid19-api-chart/
│
├── index.html      # Main HTML page
├── style.css       # Styling
├── script.js       # API fetch + chart logic
└── README.md       # Project description (this file)
```

## 🧪 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/Kalthuma007/covid19-api-chart.git
```
2. Navigate to the project folder:
```bash
cd covid19-api-chart
```
3. Open `index.html` in your browser.

## ⚙️ API Endpoint Used
```http
GET https://disease.sh/v3/covid-19/historical/all?lastdays=30
```
Returns:
```json
{
  "cases": {
    "4/25/24": 1234567,
    ...
  },
  "deaths": {...},
  "recovered": {...}
}
```



## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---

*Created by Kaltun Mustafe Mohamed – 2025*
