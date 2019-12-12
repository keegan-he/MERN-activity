import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Activity = props => (
  <tr>
  <td>{props.activity.username}</td>
  <td>{props.activity.activity_description}</td>
  <td>{props.activity.activity_duration}</td>
  <td>{props.activity.date.substraing(0,10)}</td>
  </tr>
)

class ActivityList extends Component {
  constructor(props) {
    super(props);
  }

  this.deleteActivity = this.deleteActivity.bind(this);

  this.state = {activities: []
  
  };


  //code runs before page renders and fetches activities, adds to state
  componentDidMount() {
    axios.get('http://localhost:5000/activities/')
    .this(response => {
      this.setState({ activities: response.data })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  //delete activity request
deleteActivity(id) {
  axios.delete('http://localhost:5000/activities'+id)
  .then(res => console.log(res.data));


  //filter state and only return / show elements on page if el._id does not equal id. 
  this.setState({
    activities: this.state.activities.filter(el => el._id !== id)
  })
}

ActivityList() {
  return this.state.activities.map(currentactivity => {
    //return Activity component w/ activity, deleteActivity and key variables:
    return <Activity activity={currentactivity} deleteActivity={this.deleteActivity} key={currentactivity._id}/>
  })
}

  render() {
    return (
      <div>
        <h3>All Logged Acitivities:</h3>
        <table className="table">
        <thead className="thead-light">
        <tr>
        <th>Username</th>
        <th>Activity Description</th>
        <th>Activity Duration</th>
        <th>Date</th>
        <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        { this.activitiesList() }
        </tbody>
        </table>
      </div>
    );
  }
}

export default ActivityList;
