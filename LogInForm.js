import React from 'react';
import firebase from 'firebase';
import './Auth';
import './Style.css';
export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGoogle = this.handleGoogle.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //const auth = firebase.auth();
    const {email, password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
  handleGoogle = (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleSignup = (event) => {
    event.preventDefault();
    //const auth = firebase.auth();
    const {email, password} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }
  render(){
    return (
      <div style={{textAlign: 'center'}}>
        <div>
          <h1>Welcome to MNRI0 to-do list</h1>
          <h1>Please Login first</h1>
        </div>
        <div className="form-content">
          <>
            <td><input type="email" onChange={this.handleChange} placeholder="Email" name="email"/></td>
            <td><input type="password" onChange={this.handleSubmit} placeholder="Password" name="password"/></td>
            <td><input type="button" onClick={this.handleSubmit} value="SignIn" className="button"/></td>
            <td><input type="button" onClick={this.handleGoogle} value="Signin with Google" className="_button"/></td>
            <td><input type="button" onClick={this.handleSignup} value="Signup" className="_button" style={{backgroundColor: '#ffaeae'}}/></td>
            </>
        </div>
      </div>
    );
  }
}
