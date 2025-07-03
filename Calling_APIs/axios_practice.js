axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>{
        console.log("Data from API:", response.data.title); // Logs the data from the API
    })
    .catch((err)=>{
        console.log("Error encountered:", err); // Catches and logs any error
    })