import { useSelector } from 'react-redux';
import ContactList from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';

export const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && !error && (
        <h1>
          <Loader />
        </h1>
      )}
      <ContactList />
    </>
  );
};
