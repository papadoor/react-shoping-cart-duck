import React from 'react';
import User from './User';
import { getPeople } from '../../xhr';

let Users = React.createClass({

  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    getPeople().then(results => {
      this.setState({
        users: results.data.data
      })
    })
  },

  render: function() {
    return (
      <div>
        <h3>Star Wars Characters:</h3>
        {this.state.users.map(user => {
          return <User name={user.username} id={user.id} key={user.username} />
        })}
      </div>
    )
  }
})

export default Users
