// Task2: Fetch Tickets Using Async/Await and Handle Errors

async function fetchCustomerTickets () {
    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    // throwing error if theres a network problem
    if (!response.ok) {
        throw new Error (`Network response was not okay`);
    }
    let customerTickets = await response.json();
    // throwing error if there are no more unresolved tickets
    if (customerTickets.length === 0) {
        throw new Error ('There are no unresolved tickets');
    }
}
// catch to handle other errors
    catch (error) {
        console.error (`ERROR: could not properly fetch data (${error.status})`);
    }
}



