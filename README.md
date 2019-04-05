# Putting it all together with MERN

### Exercise 1:
#### Create a Node/Express backend
* Add an endpoint for ```/tickets/seeddata``` that will seed a Mongo collection called ```TroubleTickets``` with (at least) 3 ticket records. 
* Each ticket record should have the following properties ```ticket_person_reporting```, ```ticket_problem_description```, and ```ticket_date```.

#### Create a React Frontend
* The frontend should retrieve the tickets from the Mongoose/Mongo database, and display them in a table. *Think* about how to slice the displayed result into multiple components.

### Challenge:
* Add an initially hidden ```add new ticket form```
* The frontend should provide a button to ```Add New Support Ticket```
* Clicking the ```Add New Support Ticket``` should display the hidden form and allow the User to enter the ticket information that corresponds to the model in Mongo DB
* Clicking the ```Submit New Ticket``` button should add a ticket to the list (NOTE: You can pass the 3 properties as parameters in a GET)
* The updated ticket list should display/re-render and the ```Add New Support Ticket``` form should again be hidden (but not the buttons)
