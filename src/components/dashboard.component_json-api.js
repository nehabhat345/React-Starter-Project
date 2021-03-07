import React, { Component } from "react";
//import { Table } from "semantic-ui-react";
//import contacts from './employees-api.json';
//const url = "http://dummy.restapiexample.com/api/v1/employees";

export default class Dashboard extends Component {
  
  constructor(props)
	{
		super(props);
		this.state = {
			data: []
		}
	}

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(response => response.json())
      .then(responseJson => {
		this.setState({ data: responseJson.data });
		console.log("data from api::"+responseJson.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map(obj => {
          return (
            <div>
              <h2>{obj.id}</h2>
              <h3>{obj.employee_name}</h3>
              <p>{obj.employee_age}</p>
            </div>
          );
        })}
      </div>
    );
  }
}