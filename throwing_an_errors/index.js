// async and await 

const getTodos = async () => {

    const response = await fetch('todos/pss.json');

    if(response.status !== 200){
        throw new Error('Cannot fetch the data');
    }

    const data = await response.json();
    return data;
};

getTodos().then(data => {
    console.log('Resolved:', data);
}).catch((err) => {
    console.log('Rejected:', err.message);
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