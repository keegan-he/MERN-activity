import React, { Component } from 'react';

class CreateActivity extends Component {
  constructor(props) {
    super(props);

    //bind this to methods in this class//
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeActivityDescription = this.onChangeActivityDescription.bind(
      this
    );
    this.onChangeActivityDuration = this.onChangeActivityDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.state = {
      username: '',
      activity_description: '',
      activity_duration: '',
      date: new Date(),
      users: []
    };
  }

  //hardcode test user for fun
  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeActivityDescription(e) {
    this.setState({
      activity_description: e.target.value
    });
  }

  onChangeActivityDuration(e) {
    this.setState({
      activity_duration: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const activity = {
      username: this.state.username,
      activity_description: this.state.activity_description,
      activity_duration: this.state.activity_duration,
      date: this.state.date
    };

    console.log(activity);

    window.location = '/';
  }

  render() {
    return (
      <div>
        <p>Create Activity component here</p>
      </div>
    );
  }
}

export default CreateActivity;
