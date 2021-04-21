import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal';
import { getSelectedElement } from '../../redux/selectors';
import { unselectElement, setElementProperties } from '../../redux/actions';
import { Wrapper } from './style';
import UpdatePropertiesForm from './UpdatePropertiesForm';

const Form = ({ open }) => {
  const selectedElement = useSelector(getSelectedElement);
  const dispatch = useDispatch();

  const submit = (event, values) => {
    event.preventDefault();
    dispatch(setElementProperties(selectedElement.id, values));
    dispatch(unselectElement());
  };

  const unselect = () => dispatch(unselectElement());

  return (
    <Modal open={open} heading="Edit Element" onClose={unselect}>
      <Wrapper>
        <UpdatePropertiesForm
          submit={submit}
          selectedProperties={selectedElement.properties}
        />
      </Wrapper>
    </Modal>
  );
};

export default Form;
