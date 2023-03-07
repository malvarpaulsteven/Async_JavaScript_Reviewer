// async and await 

const getTodos = async () => {

    const response = await fetch('todos/ps.json');
    const data = await response.json();
    return data;
};

getTodos().then(data => {
    console.log('Resolved', data);
}).catch((err) => {
    console.log('Rejected', err);
});






//  ------------------------------------------
// Fetch API

// fetch('todos/ps.json').then((response) => {
//     console.log('Resolved', response);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('Rejected', err);
// });