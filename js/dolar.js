// Consulta el precio del dólar en pesos chilenos y lo muestra debajo de las flechas
fetch('https://mindicador.cl/api/dolar')
	.then(response => response.json())
	.then(data => {
		const valor = data.serie[0].valor;
		document.getElementById('usdclp-indicador').textContent =
			`USD/CLP: $${valor.toLocaleString('es-CL', {maximumFractionDigits: 2})}`;
	})
	.catch(() => {
		document.getElementById('usdclp-indicador').textContent = "USD/CLP no disponible";
	});
