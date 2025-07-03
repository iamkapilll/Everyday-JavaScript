// The get request to fetch posts from a public API using Axios

// axios.get('https://jsonplaceholder.typicode.com/posts/2')
//   .then(response => {
//     console.log('GET response:', response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching posts:', error);
//   });


// The post request to create a new post using Axios

axios.post('https://reqres.in/api/users', {
    name: 'kapil',
    job: 'developer'
  })
  .then(response => {
    console.log('POST response:', response.data);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });



// The put request to update an existing post using Axios

// axios.put('https://jsonplaceholder.typicode.com/posts/1', {
//     id: 1,
//     title: 'Updated Post Title',
//     body: 'Updated content of the post.',
//     userId: 1
//   })
//   .then(response => {
//     console.log('PUT response:', response.data);
//   })
//   .catch(error => {
//     console.error('Error updating post:', error);
//   });



//The delete request to remove a post using Axios

// axios.delete('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => {
//   console.log('DELETE response:', response.data);
// })
// .catch(error => {
//   console.error('Error deleting post:', error);
// });


