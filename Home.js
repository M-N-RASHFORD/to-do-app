import React from 'react';
import firebase from 'firebase';
import './Todo-Style.css';
const items = [];
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      newItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      newItem: event.target.value
    });
  }
  handleAdd = () => {
    const {newItem} = this.state;
    const newItems = items.push(newItem);
    if (newItem === ''|| newItem === null) {
      return null && '';
    }
    this.setState({
      items: newItems,
      newItem: ''
    });
  }
  handleDelete = (index) => {
    const newItems = items.splice(index, 1);
    this.setState({
      items: newItems
    });
  }
  signOut = () => {
    firebase.auth().signOut();
  }
  render(){
    return (
      <div className="container">
        <div style={{textAlign: 'center'}}>
          <h1>Welcome user</h1>
          <h2 style={{marginTop: '-3vh'}}>This is a todo list app</h2>
        </div>
      <center>
        <div style={{fontSize: '1.1em'}}>
          {items.map((item, index) => {return (
            <ul>
              <li key={item.id}>
                <div className="content">
                  <div className="items">{item}</div>
                  <div className="time">
                    created at: {new Date().getMonth()}/{new Date().getDay()}/{new Date().getFullYear()}
                    <input type="button"
                      onClick={this.handleDelete.bind(this, index)}
                      value="delete" className="delete"
                    />
                  </div>
                </div>
              </li>
            </ul>
          );})}
        </div>
        <div style={{transform: 'translateX(8vh)'}}>
          <>
            <td><input type="text" onChange={this.handleChange} placeholder="Input item" className="item-content" autoFocus={true}/></td>
            <td><input type="button" value="Add" onClick={this.handleAdd.bind(this)} className="button-content"/></td>
            <td><input type="button" className="button-content" value="Signout" style={{transform: 'translateX(5px)'}} onClick={this.signOut}/></td>
          </>
        </div>
        </center>
      </div>
    );
  }
}
