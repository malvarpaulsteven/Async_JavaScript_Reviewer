
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if(request.readyState === 4){
                reject('Error getting resource');
            }
        });
        
        // What type of request and where we get the data -----> down below
        request.open('GET', resource);
        request.send();
    })
};

getTodos('todos/ps.json').then(data => {
    console.log('Promise 1 resolved:', data);
    return getTodos('todos/romar.json');
}).then(data=> {
    console.log('Promise 2 resolved', data);
    return getTodos('todos/shaina.json');
}).then(data => {
    console.log('Promise 3 resolved', data);
}).catch(err => {
    console.log('Promise Rejected:', err);
});






//  Promise Example <---------------------------------------------|||||
// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch something
//         // resolve('some data');
//         reject('some error');
//     });
// }

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })


