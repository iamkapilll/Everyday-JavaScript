
const jokes = document.querySelector('#jokes')
const button = document.querySelector('button')

const addnewjokes = async()=>{
    const joketext = await getdadjoked() 
    // console.log(joketext)
    const newli = document.createElement('li')
    newli.append(joketext)
    jokes.append(newli)
}




const getdadjoked = async() =>{
  try{
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }
    const response = await axios.get(' https://icanhazdadjoke.com/' , config) // here we are passing the config object to set the headers
    return response.data.joke   // here data is the object that contains the joke and joke is the key that contains the joke
  }
  catch(err){
        return "No jokes available"
  }
}

button.addEventListener('click', addnewjokes )
