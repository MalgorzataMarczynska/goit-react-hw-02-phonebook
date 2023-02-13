import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ inputId, searchQuery }) => (
  <div className={css.filter}>
    <label htmlFor={inputId} className={css.label}>
      Find contacts by name
    </label>
    <input
      className={css.input}
      type="text"
      name="filters"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      onChange={searchQuery}
      //id={inputId}
    />
  </div>
);
Filter.propTypes = {
  inputId: PropTypes.string,
  searchQuery: PropTypes.func,
};
