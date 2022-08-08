import axios from "axios";

// change the baseURL to whatever your resource is called
// example -> baseURL: "https://<resource_name_here>/"
// connection has to be secure ( HTTPS )
const api = axios.create({
	baseURL: "https://fivem-vue-bolierplate/",
});

export default api;
