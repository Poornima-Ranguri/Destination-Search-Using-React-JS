import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangesSearchInput = event => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="home">
        <h1 className="heading">Destination Search</h1>
        <div className="search-image-container">
          <input
            type="search"
            className="search"
            onChange={this.onChangesSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="image-1"
            alt="search icon"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <DestinationItem userDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
