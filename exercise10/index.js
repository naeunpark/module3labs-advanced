/*
10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in
the comments before the function.)
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs
c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.
*/

//run 'npm init' and accept all the defaults
//run 'npm install node-fetch'
//add this line to package.json after line 5: "type": "module",
import fetch from 'node-fetch'
globalThis.fetch = fetch

function fetchURLData(url) {
    let fetchPromise = fetch(url).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    });
    return fetchPromise;
}

// Valid url Test
fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

// Invalid url Test
fetchURLData('https://jsonplaceholder.typicode.com/todos/bb')
    .then(data => console.log(data))
    .catch(error => console.error(error.message));

// a) Write a new version of this function using async/await
async function asyncFetchURLData(url) {
    try {
        let promise = await fetchURLData(url);

        console.log(await promise);
        return true;

    } catch (error) {
        console.log(`Failure: ${error.message}`);
    }
    return false;
}

// Valid url Test
asyncFetchURLData('https://jsonplaceholder.typicode.com/todos/1');

// Invalid url Test
asyncFetchURLData('https://jsonplaceholder.typicode.com/todos/bb');

//c) (Extension) Extend your new function to accept an array of URLs and fetch all of them, using Promise.all to combine the results.
const array = ['https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/3']

Promise.all(array.map(url => asyncFetchURLData(url))).then((values) => console.log(values));