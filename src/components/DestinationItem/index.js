import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {id, name, imgUrl} = userDetails
  return (
    <li className="item-container" key={id}>
      <img src={imgUrl} className="image" alt={name} key="imgUrl" />
      <p className="parag">{name}</p>
    </li>
  )
}

export default DestinationItem
