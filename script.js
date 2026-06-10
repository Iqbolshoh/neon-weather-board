async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  const apiKey = "YOUR_API_KEY";

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  );

  const data = await res.json();

  if (data.cod === 200) {
    result.innerHTML = `
      <h2>📍 ${data.name}</h2>
      <h1>🌡 ${data.main.temp}°C</h1>
      <p>🌥 ${data.weather[0].description}</p>
    `;
  } else {
    result.innerHTML = "❌ Not found";
  }
}