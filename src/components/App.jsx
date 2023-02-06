import React from 'react';
import { nanoid } from 'nanoid';

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

  handleChange = evt => {
    const { name, value } = evt.target;
    const results = this.state.contacts.filter(contact => {
      if (evt.target.value === '') return this.state.contacts;
      return contact.name
        .toLowerCase()
        .includes(evt.target.value.toLowerCase());
    });
    this.setState({ [name]: value, filters: results });
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
    console.log(
      `Added as: ${this.state.name}, contacts: ${this.state.contacts}, number: ${this.state.number}`
    );
  };

  render() {
    const { filters, name, number } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
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
          <label htmlFor={this.filterInputId}>Find contacts by name</label>
          <input
            type="text"
            name="filters"
            value={filters}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            id={this.filterInputId}
          />
          <ul>
            {this.state.filters === ''
              ? this.state.contacts.map(contact => {
                  return (
                    <li key={contact.id}>
                      {contact.name}: {contact.number}
                    </li>
                  );
                })
              : this.state.filters.map(contact => {
                  return (
                    <li key={contact.id}>
                      {contact.name}: {contact.number}
                    </li>
                  );
                })}
          </ul>
        </section>
      </div>
    );
  }
}
