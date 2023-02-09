import css from './ContactItem.module.css';
import PropTypes from 'prop-types';
export const ContactItem = ({ stateArray }) =>
  stateArray.map(contact => {
    return (
      <li key={contact.id} className={css.listItem}>
        {contact.name}: {contact.number}
      </li>
    );
  });
ContactItem.propTypes = {
  stateArray: PropTypes.array,
};
