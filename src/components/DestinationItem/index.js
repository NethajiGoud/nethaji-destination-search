// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachDestinations} = props
  const {name, url} = eachDestinations
  return (
    <li className="destination-item">
      <img alt="avathar" src={url} className="destination-image" />
      <p className="name"> {name} </p>
    </li>
  )
}

export default DestinationItem
