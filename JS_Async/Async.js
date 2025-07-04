// async function hello(){    // one way of writing async funciton
// //
// }


// # example 1 
// const sing = async()=>{
//     return `hey i am async function`;

//     throw `oh no, problem`
// }

// sing()
//     .then((data)=>{
//         console.log('the promise resolved with data:', data)
//     })
//     .catch((err)=>{
//         console.log('this is Error occured:', err)
//     })






// # example 2
    const login = async(username, password) =>{
        if(!username || !password) throw "missing credentials"
        if(password === 'vedas123') return "welcome"
        throw ' invalid password'
    }
    
    login('kapil','vedas123')
        .then((msg) =>{
            console.log('logged in')
            console.log(msg)
        })
        .catch((err) =>{
            console.log('error!!')
            console.log(err)
        })
    
    
    
        // In JavaScript, asynchronous programming refers to the ability to execute tasks or operations independently
        //  of the main program flow. This means that while one task is being processed (such as fetching data from a 
        // server or reading a file), the program can continue executing other tasks without waiting for the first one to finish.