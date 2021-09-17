const app = new Vue({
	el: "#root",
	data: {
		message: "Hello Vue!",
		image: "https://www.codersitalia.it/wp-content/uploads/2020/02/imparare-vuejs.jpeg"
	},
	methods: {
		cambiaImmagine() {
			this.image = "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png";
		}
	}
});