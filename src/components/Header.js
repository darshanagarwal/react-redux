import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from  'react-redux'
export class Header extends Component {
    render() {
        
        return (
            <div className="row">
              <div className="col-md-12">
                  <nav className="navbar  navbar-dark bg-dark ">
                        <ul className="nav">
                            <li className="nav-item" ><img src="/logo.png" height="40px"/></li>
                            <li className="nav-item" ><Link to="/home" className="nav-link active">Home</Link></li>
                            <li className="nav-item"><Link to="/task" className="nav-link">Task </Link></li>
                            <li className="nav-item"><Link to="/user" className="nav-link">User </Link></li>
                        </ul>
                       
                  </nav>
              </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        user:state._todo.user
    }
}
export default connect(mapStateToProps,null)(Header)
