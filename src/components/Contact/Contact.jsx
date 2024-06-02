import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = ({ id, name, number, onDelete }) => (
  <li className="contact-card">
    <div className="contact-info">
      <p><span><FaUser /></span>{name}</p>
      <p><span><FaPhoneAlt /></span>{number}</p>
    </div>
    <button className="contact-delete-button" onClick={() => onDelete(id)}>Delete</button>
  </li>
);

export default Contact;