const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4){
        console.log(request.responseText);
    }

});

// What type of request and where we get the data -----> down below
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

