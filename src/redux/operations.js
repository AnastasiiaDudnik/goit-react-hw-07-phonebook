import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetcingError,
} from './contactsSlice';

axios.defaults.baseURL = 'https://64304f99c26d69edc88f6f27.mockapi.io';

export const fetchContacts = async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const responce = await axios.get('/contacts');
    dispatch(fetchingSuccess(responce.data));
  } catch (error) {
    dispatch(fetcingError(error.message));
  }
};
