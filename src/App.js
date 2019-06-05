import React from 'react';
import styles from './App.module.css';
import NumberItem from './NumberItem';
import axios from 'axios';

class App extends React.Component{
  state = {
    search: '',
    contacts: []
  }
  componentDidMount(){
    axios.get('http://www.mocky.io/v2/581335f71000004204abaf83')
      .then(response => {
        this.setState({contacts: response.data.contacts});
      })
  }

  renderList(){
    let filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
    });
    return filteredContacts.map(contact => {
      return (
        <div>
          <NumberItem
            title={contact.name}
            phonenumber={contact.phone_number}
            address={contact.address}
            />
        </div>
      )
    })
  }

  onChange = e => {
    this.setState({search: e.target.value});
  }

  sortAscending = () => {
    const sortedByAscending = this.state.contacts.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

  return 0;
    });

    this.setState({ contacts: sortedByAscending});
  }


  render(){
    return (
      <div className={styles.List}>
        <h2>Contacts</h2>
        <div className={styles.features}>
          <input placeholder="Search" onChange={this.onChange} ></input>
          <button onClick={this.sortAscending}>Sort Alphabetically</button>
        </div>
        <div>{this.renderList()}</div>
      </div>
    )
  }
}

export default App;
