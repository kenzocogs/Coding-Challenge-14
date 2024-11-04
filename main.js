// Task 2: Fetch Tickets Using Async/Await and Handle Errors

const container = document.getElementById('container')
let errorMessage = document.getElementById('error-message')
let loadingIndicator = document.getElementById('loading-indicator')

async function fetchCustomerTickets () {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // throwing error if theres a network problem
    if (!response.ok) {
        throw new Error (`Network response was not okay`);
    }
    let customerTickets = await response.json();
    // throwing error if there are no more unresolved tickets
    if (customerTickets.length === 0) {
        throw new Error ('There are no unresolved tickets');
    }
    // calling the display function with the fetched JSON data
    displayTickets (customerTickets);
}
// catch to handle other errors
    catch (error) {
        errorMessage.style.display = 'block' // displaying error if one is found
        console.error (`ERROR: could not properly fetch data (${error})`);
    }
    // Task 4: Use "finally" to Ensure Cleanup
    finally {
        loadingIndicator.style.display ='none' // hiding loading indicator at the end
    }
}

// Task 3: Display Tickets Dynamically on the Page

// function to display tickets
function displayTickets (tickets) {
    
    tickets.forEach(ticket => {
        // defining DOM elements
        const ticketElement = document.createElement('div')
        ticketElement.classList.add('ticket');
        // formatting ticket display with fields
        ticketElement.innerHTML = ` 
        <h2>Ticket: ${ticket.id}</h2>
        <p><i>Customer: ${ticket.userId}</i></p>
        <p>Issue: ${ticket.title}</p>
        <p>Details: ${ticket.body}</p>
        `;
       container.appendChild(ticketElement);
    }
    );
}

// calling fetch function at the end
fetchCustomerTickets();


