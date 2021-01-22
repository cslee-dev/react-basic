import React, {Component} from 'react';

// const SearchBar = () => {
//   return <input />;
// };
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
        <div
            className="search-bar"
        >
          <input
              value={this.state.term}
              onChange={event => this.handleInputChange(event.target.value)}
          />
        </div>
    );
  }

  // [handle][elementName][eventName]
  handleInputChange(term) {
    this.setState({term});
    this.props.handleTermChange(term);
  }
}

export default SearchBar;