import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilters } from 'redux/selectors';
import { FilterInput } from './Filter.styled';
import { setContactFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const value = evt.target.value;
    dispatch(setContactFilter(value));
  };

  return (
    <label>
      Find contact by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
};
