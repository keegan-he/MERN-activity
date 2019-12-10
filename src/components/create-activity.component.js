import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CreateActivity extends Component {
  constructor(props) {
    super(props);

    //bind this to methods in this class//
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeActivityDescription = this.onChangeActivityDescription.bind(this);
    this.onChangeActivityDuration = this.onChangeActivityDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

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
        <h3>Create Your Activity Journal</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Activity Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.activity_description}
              onChange={this.onChangeActivityDescription}
            />
          </div>
          <div className="form-group">
            <label>Activity Duration (in minutes): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.activity_duration}
              onChange={this.onChangeActivityDuration}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Activity Journal"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateActivity;
