
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if(request.readyState === 4){
            callback('Could not fetch the data.', undefined);
        }
    });
    
    // What type of request and where we get the data -----> down below
    request.open('GET', resource);
    request.send();
}

getTodos('todos/ps.json', (err, data) => {
    console.log(data);
   
});


