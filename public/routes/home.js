import React from 'react'
import Stateless from '../components/stateless-sample'
import StateMobx from '../components/state-with-mobx'

export default class Home extends React.Component {
  constructor (...props) {
    super(...props)
  }

  render () {
    return <div>
      <h2>Home route</h2>
      <Stateless name='stranger'/>
      <StateMobx />
      <p>you can try editing it as you like to test this out</p>

    </div>
  }
}
