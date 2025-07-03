let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://swapi.dev/api/people/1/', true); 

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data); // Log the response data to the console
  }
};

xhr.send();
// In this code snippet, we create a new XMLHttpRequest object and open a GET request to the Star Wars API. 
// We then set the onreadystatechange event handler to a function that checks if the request is complete (readyState === 4)
//  and successful (status === 200). If both conditions are met, we parse the response data as JSON and log it to the console. 
// This allows us to retrieve and work with data from an external API in our JavaScript code.