// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destination-item">
      <img alt="avathar" src={imgUrl} className="destination-image" />
      <p className="name"> {name} </p>
    </li>
  )
}

export default DestinationItem
