
import { Component } from "react";
import { nanoid } from 'nanoid';
import Container from "./GlobalContainer/Container";
import Form from "./Form/Form";
import SearchContact from './SearchContact/SearchContact';
import ContactList from "./ContactList/ContactList";
import contacts from './contacts.json';



export class App extends Component {
 
  state = {
    contacts,
    filter: '',
  };


  checkContactName = checkedName => {
    const { contacts } = this.state
    const result = contacts.find(
      contact => contact.name.toLowerCase() === checkedName.toLowerCase()
    );
    return result;
  };


  addContact = ({name, number}) => {
    
    if (this.checkContactName(name)) {
     return alert(`This contact ${name} is already in the phonebook`);
    };

    const contact = {
      id: nanoid(),
      name,
      number,
    };


    this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
  };

  searchContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };


  checkSearchContact = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== contactId)
    }))
  };

  render() {
    const { filter } = this.state;
    const contactSearchResult = this.checkSearchContact();

    return (
      <Container>
          <h2>Phonebook</h2>
        <Form onSubmit={this.addContact}/>
        <h2>Contacts</h2>
        <SearchContact value={filter} onSearch={this.searchContact}/>
        <ContactList contacts={contactSearchResult} onDelete={this.deleteContact} />
        </Container>
    );
  }; 
};

