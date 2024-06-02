import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import './App.css';

const App = () => (
  <div className="app-container">
    <div className="form-container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
    </div>
    <ContactList />
  </div>
)

export default App;