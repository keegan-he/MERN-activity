import React, { Component } from 'react';

class CreateUser extends Component {
  constructor(props) {
    super(props);

    //bind this to methods in this class//
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      user: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    };

    console.log(user);

    this.setState({
      username: ''
    });
  }

  render() {
    return (
      <div>
        <p>Create User component here</p>
      </div>
    );
  }
}

export default CreateUser;
