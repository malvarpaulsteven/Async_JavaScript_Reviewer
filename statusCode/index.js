const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status === 200){
        console.log(request, request.responseText);
    } else if(request.readyState === 4){
        console.log('Could not fetch the data.')
    }
});

// What type of request and where we get the data -----> down below
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

