const port = import.meta.env.VITE_REACT_APP_PORT;

console.log(port, "port en apiUrl");
const apiUrl = `http://localhost:${port}/api/`;

export default apiUrl;
