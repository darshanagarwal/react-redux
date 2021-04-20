import React, { Component } from 'react'
import Button from "react-bootstrap/Button";

export class User extends Component {
    constructor(props) {
        super(props)
       this.state = {
           username: '',
           password: '',
           changePasswordFlag: false,
           newPassword: ''
       }
       this.changePassword = this.changePassword.bind(this);
       this.updatePassword = this.updatePassword.bind(this);
       this.setNewPassword = this.setNewPassword.bind(this);
       this.handleLogout = this.handleLogout.bind(this);
    }
    updatePassword(event) {    this.setState({newPassword: event.target.value});  }

    componentDidMount(){
        let user =localStorage.getItem('user')
        if(user == null) {
            this.props.history.push('/')
        } else {
            let data = JSON.parse(user);
            if(data.loggedOff== true) {
                this.props.history.push('/')
            } else {
                this.setState({username: data.username, password: data.password});
            }
        }
    }
    changePassword () {
        this.setState({changePasswordFlag: true})
    }
    setNewPassword () {
        let data = {
            username: this.state.username,
            password: this.state.newPassword,
            loggedOff: true
        }
        localStorage.setItem('user', JSON.stringify(data));
        this.props.history.push('/')
    }
    handleLogout () {
        //localStorage.removeItem('user');
        let data = {
            username: this.state.username,
            password: this.state.password,
            loggedOff: true
        }
        localStorage.setItem('user', JSON.stringify(data));
        this.props.history.push('/')
    }
    render() {
        
        return(
            <div className="row">
                <div className="col-md-12">
                    <h4>User Name: {this.state.username}</h4>
                </div>
                {!this.state.changePasswordFlag ? <div className="col-md-12"><h4>Password:  *********</h4></div>: 
                <div className="col-md-12">
                  <h4>New Password:  <input type="password" value={this.state.newPassword} onChange={this.updatePassword} /></h4>  
                </div>
                }
                <div className="col-md-12 row" style={{marginTop: '50px'}}>
                    {!this.state.changePasswordFlag ? 
                    <div className="col-md-3">
                        <Button block size="sm" type="button" onClick={this.changePassword}>
                            Change Password
                        </Button>
                    </div> :
                    <div className="col-md-3">
                        <Button block size="sm" type="button" onClick={this.setNewPassword}>
                            Save Password
                        </Button>
                    </div>
                    }
                    <div className="col-md-3">
                        <Button block size="sm" type="button" onClick={this.handleLogout}>
                            Logout
                        </Button>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default User
