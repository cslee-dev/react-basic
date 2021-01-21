import React, {Component} from 'react';

// const SearchBar = () => {
//   return <input />;
// };
class SearchBar extends Component {
  render() {
    return (
        <input onChange={event => console.log(event.target.value)} />
    );
  }

  // [handle][elementName][eventName]
}

export default SearchBar;