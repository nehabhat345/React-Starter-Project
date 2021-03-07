import React, { Component } from "react";

export default class Login extends Component {
	 /*constructor(props){
    super(props);
}*/  

  submitForm = (e) => {
    e.preventDefault();
	this.props.history.push('/dashboard')
  }
	
	
    render() {
        return (
            <form>
                <h3>Admin Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
				 <input type="button" className="btn btn-primary btn-block" value="Submit" onClick={this.submitForm}/>
                <p className="forgot-password text-right">
					<input type="button" class="btn btn-primary btn-block" href="#" value ="Forgot password?"/>
                </p>
            </form>
        );
    }
}
