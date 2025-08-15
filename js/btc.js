// Consulta el precio del BTC en USD desde Binance y lo muestra debajo del indicador USD/CLP

function actualizarBTC() {
	fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
		.then(response => response.json())
		.then(data => {
			const valor = parseFloat(data.price);
			document.getElementById('btc-indicador').textContent =
				`BTC/USD: $${valor.toLocaleString('en-US', {maximumFractionDigits: 2})}`;
		})
		.catch(() => {
			document.getElementById('btc-indicador').textContent = "BTC/USD no disponible";
		});
}
actualizarBTC();
setInterval(actualizarBTC, 17000);
// ...existing code from btc.js...
