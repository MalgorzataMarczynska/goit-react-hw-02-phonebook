import React from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './filter/Filter.js';
import { ContactList } from './contact_list/ContactList.js';
import { ContactItem } from './contact_item/ContactItem.js';
import { ContactForm } from './contact_form/ContactForm.js';

// const INITIAL_STATE = {
//   contacts: [],
//   filters: '',
// };
const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filters: '',
};
export class App extends React.Component {
  state = { ...INITIAL_STATE };
  nameInputId = nanoid();
  phoneInputId = nanoid();
  filterInputId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  handleFilter = event => {
    const results = this.state.contacts.filter(contact => {
      if (event.target.value === '') return this.state.contacts;
      return contact.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState({ filters: results });
  };
  handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    const { name, number } = this.state;
    const nameId = nanoid();
    const contact = { id: nameId, name, number };
    const isDuplicate = this.state.contacts.find(cont =>
      cont.name.toLowerCase().includes(contact.name.toLowerCase())
    );
    this.setState(state => {
      if (isDuplicate) return alert(`${contact.name} is already in contacts`);
      const contacts = [...state.contacts, contact];
      return { contacts };
    });
  };
  removeContact = id => {
    this.setState(state => {
      const contacts = this.state.contacts.filter(item => item.id !== id);
      return { contacts };
    });
  };

  render() {
    const { filters } = this.state;

    return (
      <div>
        <h1 className="main-title">Phonebook</h1>
        <section>
          <ContactForm
            nameInputId={this.nameInputId}
            phoneInputId={this.phoneInputId}
            inputChange={this.handleChange}
            leaveSubmit={this.handleSubmit}
          ></ContactForm>
        </section>
        <section>
          <h2 className="title">Contacts</h2>
          <Filter
            inputId={this.filterInputId}
            searchQuery={this.handleFilter}
          ></Filter>
          <ContactList>
            {filters === '' ? (
              <ContactItem
                stateArray={this.state.contacts}
                removeItem={this.removeContact}
              ></ContactItem>
            ) : (
              <ContactItem
                stateArray={this.state.filters}
                removeItem={this.removeContact}
              ></ContactItem>
            )}
          </ContactList>
        </section>
      </div>
    );
  }
}
