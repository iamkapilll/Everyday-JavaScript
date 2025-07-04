const delayedColor = (color,dealy)=>{
    return new Promise((resolve, reject)=>{
        const rand = Math.random()
        setTimeout(() => {
            if(rand > 0.7){
                resolve('here are the given colors')
                document.body.style.backgroundColor = color;
            }
            else{
                reject('Oh no No colors')
            }
        }, dealy);
    })
}


const rainbow = async()=>{
    await delayedColor('cyan',500)
    await delayedColor('blue',1000)
    await delayedColor('red',1000)  
    await delayedColor('green',1000)  
    await delayedColor('grey',1000)  
    await delayedColor('pink',1000)  

}


rainbow()
    .then((data)=>{
        console.log('resolved:',data)
    })
    .catch((err)=>{
        console.log('rejected',err)
    })
