import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      picture: '',
      name: ''
    };
  }

  updatePicture(newPictureStr) {
    this.setState({
      picture: newPictureStr
    })
  }

  updateName(newNameStr) {
    this.setState({
      name: newNameStr
    })
  }

  updateFriend() {
    this.state.friends.push(
      {
        name: this.state.name,
        picture: this.state.picture
      }
    )
    this.setState({
      friends: this.state.friends
    })
  }

  render() {

    var friendsJSX = this.state.friends.map((friend) => {
      return (
        <div>
          <img src={friend.picture} />
          <span> {friend.name} </span>
        </div>
      )
    })

    return (
      <div>
        Picture:
          <input onChange={event => this.updatePicture(event.target.value)} />
        Name:
          <input onChange={event => this.updateName(event.target.value)} />
        <button onClick={event => this.updateFriend()}>Add Friend</button>

        {friendsJSX}

      </div>

    );

  }
}

export default App;
