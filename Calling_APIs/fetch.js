fetch('https://swapi.dev/api/people/1/')
    .then((response) => {
        console.log("First API resolved", response);
        return response.json(); // returns a parsed json data
    })
    .then((data) => {
        console.log("First API data:", data);// this will log the actuall data from the api
        return fetch('https://swapi.dev/api/people/2/');// Start second fetch only after first one is completed
    })
    .then((response) => {
        console.log("Second API resolved", response);
        return response.json(); // returns a parsed json data
    })
    .then((data) => {
        console.log("Second API data:", data);  // this will log the actuall data from the api
    })
    .catch((err) => {
        console.log("Error encountered:", err); // this will log the error
    });
