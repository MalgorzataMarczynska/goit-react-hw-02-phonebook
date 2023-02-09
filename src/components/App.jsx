import React from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './filter/Filter.js';
import { ContactList } from './contact_list/ContactList.js';
import { ContactItem } from './contact_item/ContactItem.js';

// const INITIAL_STATE = {
//   contacts: [],
//   filter: '',
//   name: '',
//   number: '',
// };
const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filters: '',
  name: '',
  number: '',
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
    const { name, number } = this.state;
    const nameId = nanoid();
    const contact = { id: nameId, name, number };
    this.setState(state => {
      const contacts = [...state.contacts, contact];
      return { contacts, name: '', number: '' };
    });
  };
  // resetFilter = () =>

  render() {
    const { filters, name, number } = this.state;

    return (
      <div>
        <h2>Phonebook</h2>
        <section>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.nameInputId}>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              id={this.nameInputId}
            />
            <label htmlFor={this.phoneInputId}>Number</label>
            <input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              id={this.phoneInputId}
            />
            <button type="submit">Add contact</button>
          </form>
        </section>
        <section>
          <h2>Contacts</h2>
          <Filter
            inputId={this.filterInputId}
            searchQuery={this.handleFilter}
          ></Filter>
          <ContactList>
            {filters === '' ? (
              <ContactItem stateArray={this.state.contacts}></ContactItem>
            ) : (
              <ContactItem stateArray={this.state.filters}></ContactItem>
            )}
          </ContactList>
        </section>
      </div>
    );
  }
}
