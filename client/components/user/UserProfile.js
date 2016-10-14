import React from 'react'
import { getPerson } from '../../xhr'

let UserProfile = React.createClass({

  getInitialState: function() {
    return {
      name: null,
      password: null
    }
  },

  componentDidMount: function() {
    getPerson(this.props.params.id).then(results => {
      this.setState({
        name: results.data.data.username,
        password: results.data.data.password
      })
    })
  },

  render: function() {
    return (
      <div>
        <h3>Username: {this.state.name}</h3>
        <div>Password: {this.state.password}</div>
      </div>
    )
  }

})

export default UserProfile
