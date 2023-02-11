import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export const ContactItem = ({ stateArray, removeItem }) =>
  stateArray.map(contact => {
    return (
      <li key={contact.id} className={css.listItem}>
        {contact.name}: {contact.number}
        <button
          type="button"
          className={css.button}
          onClick={() => removeItem(contact.id)}
        >
          Delete
        </button>
      </li>
    );
  });
ContactItem.propTypes = {
  stateArray: PropTypes.array,
  removeItem: PropTypes.func,
};
