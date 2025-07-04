const fakeRequestPromise = (url) =>{
    return new Promise((resolve,reject)=>{
        const delay = Math.floor(Math.random()*(4500)) + 500;
        setTimeout(() => {
            if(delay > 4500){
                reject('connection timeout')
            }
            else{
                resolve(`here is your fake data from ${url}`)
            }
            
        }, delay);
        
    })
}



    // THIS IS THE WRONG WAY OF DOING PROMISE BECAUSE THIS WILL CREATE HELL OF NESTED THEN AND CATCH SAME LIKE CALLBACK FUNCTION

// fakeRequestPromise('yelp.com/api/cofee/page1')
//         .then(() =>{
//             console.log('promise resovled')
//             fakeRequestPromise('yelp.com/api/cofee/page2')
//             .then(()=>{
//                 console.log('promise resolved(2)')
//             })
//             .catch(()=>{
//                 console.log('promise rejected')
//                 console.log('oh no, error!!!')
//             })
            

//         })
//         .catch(()=>{
//             console.log('promise rejected')
//             console.log('oh no, error!!!')
//         })


// INSTEAD OF THAT ABOVE NESTED PROMISE WE DO:

fakeRequestPromise('yelp.com/api/cofee/page1')  //sending the url to the function   
    .then((data)=>{
        console.log('promise resolved(1)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/cofee/page2')  // this return  for fake promise page 2 will create then but not the catch
    })
    .then((data)=>{
        console.log('promise resolved(2)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/cofee/page3')  // also for this ('')
    })
    .then((data)=>{
        console.log('promise resolved(3)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/cofee/page4')  // also for this ('')
    })
    .then((data)=>{
        console.log('promise resolved(4)')
        console.log(data)
    })

    .catch((err)=>{
        console.log('promise rejected')   //  instead of those nested then and catch here is only one catch for better and not like a hell of callback function
        console.log('oh no, error')
        console.log(err)
    })












//i was doing this for revision:

// const FakeRequestPromise = (url) =>{
//     return new Promise((resolve, reject)=>{
//         const delay = Math.floor(Math.random()*4500) + 500
//         setTimeout(() => {
//             if(delay > 4500){
//                 reject('connection timeout')
//             }
//             else{
//                 resolve(`here is your fake data ${url}`)
//             }
//         }, delay);
//     })
// }


// FakeRequestPromise('thereisnothing in this url cause its just an example.1')
//     .then((data)=>{
//         console.log("promise resolved,1", data)
//         return FakeRequestPromise('thereisnothing in this url cause its just an example.2')

//     })
//     .then((data)=>{
//         console.log("promise resolve.2",data)
//         return FakeRequestPromise('thereisnothing in this url cause its just an example.3')

//     })
//     .then((data)=>{
//         console.log("promise resolve.3",data)

//     })
//     .catch((err)=>{
//         console.log("promise rejected, its an error", err)

//     })
