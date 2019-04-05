import React, { Component } from 'react';
import './App.css';
import TicketForm from "./TicketForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            display:[]
        };
        this.dataGather();
    }

    dataGather(){
        fetch("/getReports")
            .then(data => data.json())
            .then(compiledData=> this.setState({display:compiledData}));
    }

    ticketReport=()=>{
        console.log("button Clicked");

    };

    render() {

        const dataView = this.state.display.map((ticket)=>
        {
            return(
                <div key={ticket._id}>
                    <p>{ticket.person}</p>
                    <p>{ticket.date}</p>
                    <p>{ticket.problem}</p>
                    <hr/>
                </div>
            );
        });
    return (
      <div className="App">
          <h1>Ticket Reports</h1>
          {dataView}
          <button onClick={this.ticketReport}>Add New Ticket</button>
          <div id={"reportForm"}>
              <TicketForm/>
          </div>
      </div>
    );
  }
}

export default App;
