// Write your code here
import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  render() {
    const {destinationsList} = this.props
    return (
      <div className="background">
        <h1>Destination Search </h1>
        <input type="search" />

        <ul className="destinations-list">
          {destinationsList.map(eachDestination => (
            <DestinationItem
              key={eachDestination.id}
              destinationDetails={eachDestination}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
