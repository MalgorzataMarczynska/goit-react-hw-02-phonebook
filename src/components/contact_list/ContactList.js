import css from './ContactList.module.css';

export const ContactList = ({ children }) => (
  <ul className={css.list}>{children}</ul>
);
