import PropTypes from 'prop-types';
import { BsTrash2 } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import css from './contactlist.module.css';


const ContactList = ({contacts, onDelete}) => (
 <ul className={css.contactList}>{
    contacts.map(({id, name, number}) => (
        <li key={id} className={css.contactItem}><FaUserAlt/>
        <p className={css.contactName}>{name}: </p>
        <a href={number} className={css.contactLink}>{number}</a>
        <button type="button" className={css.contactBtn} onClick={() => onDelete(id)}><BsTrash2 size="20"/></button>
        </li>
        ))
      }
</ul>
); 

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;