// fetch API

fetch('todos/ps.json').then((response) => {
    console.log('Resolved', response);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('Rejected', err);
});