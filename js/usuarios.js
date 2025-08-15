// Gestión básica de usuarios con IndexedDB

const dbName = "usuariosDB";
const storeName = "usuarios";

// Inicializa la base de datos y crea un usuario demo si no existe
function initDB() {
	const request = indexedDB.open(dbName, 1);
	request.onupgradeneeded = function(e) {
		const db = e.target.result;
		if (!db.objectStoreNames.contains(storeName)) {
			const store = db.createObjectStore(storeName, { keyPath: "username" });
			store.add({ username: "demo", password: "demo123" }); // Usuario demo
		}
	};
}
initDB();

// Autenticación
function loginUser(username, password, callback) {
	const request = indexedDB.open(dbName, 1);
	request.onsuccess = function(e) {
		const db = e.target.result;
		const tx = db.transaction(storeName, "readonly");
		const store = tx.objectStore(storeName);
		const getReq = store.get(username);
		getReq.onsuccess = function() {
			if (getReq.result && getReq.result.password === password) {
				callback(true);
			} else {
				callback(false);
			}
		};
		getReq.onerror = function() { callback(false); };
	};
	request.onerror = function() { callback(false); };
}

// Manejo del formulario
document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById("login-form");
	const msg = document.getElementById("login-msg");
	const side = document.getElementById("side-container");

	if (form) {
		form.addEventListener("submit", function(e) {
			e.preventDefault();
			const user = document.getElementById("username").value.trim();
			const pass = document.getElementById("password").value;
			loginUser(user, pass, function(ok) {
				if (ok) {
					side.innerHTML = `<div class=\"welcome-msg\"><h2>¡Bienvenido, ${user}!</h2></div>`;
				} else {
					msg.textContent = "Usuario o clave incorrectos.";
				}
			});
		});
	}
});
