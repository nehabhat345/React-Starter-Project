import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import contacts from './employees-api.json';
//import contacts from './employees.json';
//const url = "http://dummy.restapiexample.com/api/v1/employees";
//console.log("Hey Neha, here is the api url::"+url);


export default class Dashboard extends Component {
  
  state = {
    todos: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
    render() {
	 const mystyle = {
      color: "#282c34",
	  padding: "40px"
    };
	
    return (
       <div className="container" style={mystyle}>
        <div className="col-xs-12">
        <h1>My Todos</h1>
        {this.state.todos.map((todo) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
              { !todo.completed &&
                <span>
                  Pending
                </span>
              }              
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}