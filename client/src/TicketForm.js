import React, { Component } from 'react';

class TicketForm extends Component {
    render() {
        return (
            <form action="/tickets/:person/:problem/:date">
                <p>User:</p>
                <input type="text"/>
                <p>Problem:</p>
                <input type="text"/>
                <p>Date:</p>
                <input type="text"/>
            </form>
        );
    }
};

export default TicketForm