import React, { Component } from 'react';
import ContactsList from './components/contacts/ContactsList'

class App extends Component {
  state = { contacts: [
    {id: 1, firstName: 'Toni', phone: '801-250-0767'},
    {id: 3, firstName: 'Mark', phone: '801-824-1601'},
    {id: 2, firstName: 'Gatsby', phone: '801-555-BARK'}
  ] }



  render() {
    const { contacts } = this.state
    return(
      <div>
        <h1>React contact list</h1>
        <ContactsList contacts={contacts} />
      </div>
    )
  }
}
export default App;


