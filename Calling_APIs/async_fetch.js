async function fetchData() {
    try {
        // First fetch
        const response1 = await fetch('https://swapi.dev/api/people/1/');
        const data1 = await response1.json();   // returns a parsed json data                                   
        console.log("First API data:", data1);   // this will log the actuall data from the api

        // Second fetch
        const response2 = await fetch('https://swapi.dev/api/people/2/');
        const data2 = await response2.json();
        console.log("Second API data:", data2);
    } catch (err) {
        console.log("Error encountered:", err);
    }
}

fetchData();
