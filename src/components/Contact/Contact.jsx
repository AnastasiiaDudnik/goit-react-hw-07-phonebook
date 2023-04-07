import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ListButton } from './Contact.styled';

export const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <p>{name}</p>
      <p>{phone}</p>
      <ListButton type="button" onClick={handleDelete}>
        Delete
      </ListButton>
    </>
  );
};

Contact.PropType = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
