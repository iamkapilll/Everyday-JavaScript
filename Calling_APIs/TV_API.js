const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    // console.log("SUBMITTED")
    const searchTerm = form.elements.query.value    // here the value of the input field is stored in searchTerm and the word query is the name of the input field, so that whatever is typed in the input field is stored in the searchTerm
    const config = { // this is the configuration object that is passed to the axios.get method , it is an object that contains the headers and the params
        params: { 
            q: searchTerm 
        }
    }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    // console.log(res.data[0].show.image.medium)
    // const img = document.createElement('img')
    // img.src = res.data[0].show.image.medium
    // document.body.append(img)
    makeImages(res.data)
    form.elements.query.value = ''
})

const makeImages = (shows) =>{
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}