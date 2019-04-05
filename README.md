# Putting it all together with MERN

### Exercise 1:
#### Create a Node/Express backend
* Add an endpoint for ```/tickets/seeddata``` that will seed a Mongo collection called ```TroubleTickets``` with 3 ticket records
* Each ticket record should have the following properties ```ticket_person_reporting```, ```ticket_problem_description```, and ```ticket_date```.

#### Create a React Frontend
* The frontend should retreieve the tickets from the Mongo database, and display them in a list with an initially hidden ```add new ticket form```
* The frontend should provide a button to ```Add New Support Ticket```
* Clicking the ```Add New Support Ticket``` should display the hidden form and allow the User to enter the ticket information that corresponds to the model in Mongo DB
* Clicking the ```Submit New Ticket``` button should add the ticket to the list (NOTE: Does not have to update the Mongo database)
* The updated ticket list should display and the ```Add New Support Ticket``` form should again be hidden

