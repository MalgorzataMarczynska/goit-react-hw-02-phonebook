import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import React from 'react';
export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  render() {
    return (
      <form className={css.form} onSubmit={this.props.leaveSubmit}>
        <label htmlFor={this.props.nameInputId} className={css.label}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="name"
          value={this.props.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.props.inputChange}
          // id={this.props.nameInputId}
        />
        <label htmlFor={this.props.phoneInputId} className={css.label}>
          Number
        </label>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={this.props.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.props.inputChange}
          // id={this.props.phoneInputId}
        />
        <button className={css.button} type="submit" onClick={this.reset}>
          Add contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  nameInputId: PropTypes.string,
  phoneInputId: PropTypes.string,
  inputChange: PropTypes.func,
  leaveSubmit: PropTypes.func,
};
