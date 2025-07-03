axios.get('https://swapi.dev/api/people/1/')
    .then(response => {
        console.log("First API data:", response.data); // Logs data from first API call
        return axios.get('https://swapi.dev/api/people/2/'); // Second API call
    })
    .then(response => {
        console.log("Second API data:", response.data); // Logs data from second API call
    })
    .catch(err => {
        console.log("Error encountered:", err); // Catches and logs any error
    });
// This code uses Axios to make two sequential API calls to the Star Wars API.
// The first call retrieves data for the character with ID 1, and the second call retrieves