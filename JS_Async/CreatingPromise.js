const fakepromise = (url) =>{
    return new Promise((resolve, reject)=>{
        const rand = Math.random()
        setTimeout(() => {
            if(rand < 0.7){
                resolve('your fake data is here')
            }
            else{
                reject("request occured")
            }
        }, 500)
       
    })
}

fakepromise('gogly no one/api/hero')
.then((data)=>{       //the data here is received as resolved data ('your fake data is here')
    console.log('done with request',data)
})
.catch((err)=>{      //similarly err is received as error meassage ("request occured")
    console.log('oh no, error,',err)
})


// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// Explanation:
// Instead of passing callbacks, promises let you handle async results more cleanly with .then() for success and .catch() for errors.