import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { getContacts } from './redux/selectors';
import { useSelector } from 'react-redux';


const App = () => {

const contacts = useSelector(getContacts);

return (
  <div>
    <h1>Phonebook</h1>
    <Form/>
    <h1>Contacts</h1>
    {contacts.length > 0 ? (
      <Filter/>
    ) : (
      <h3>There is no contacts!<br/> Add contacts through form above.</h3>
    )}
    {contacts.length > 0 && (
      <Contacts/>
    )}
  </div>
);
};

export default App;
