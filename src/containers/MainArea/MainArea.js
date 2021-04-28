import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedElement } from '../../redux/selectors';
import createElement from '../../utils/createElement';
import { Wrapper, MainArea } from './style';
import Sidebar from '../Sidebar';
import Container from './ElementContainer';
import EditElementModal from '../EditElementModal';
import {
  addElement,
  selectElement,
  setElementProperties,
  removeElement,
} from '../../redux/actions';

const MainAreaContainer = () => {
  const selectedElement = useSelector(getSelectedElement);
  const dispatch = useDispatch();
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [elementId, setElementId] = useState('');

  const onDragStart = useCallback(
    ({ type, elementId }) => (e) => {
      e.stopPropagation();
      e.dataTransfer.setData('type', type || '');
      e.dataTransfer.setData('elementId', elementId || '');
    },
    []
  );

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    setXPosition(e.pageX);
    setYPosition(e.pageY);
  }, []);

  const onDrop = useCallback(
    (e) => {
      e.stopPropagation();
      const type = e.dataTransfer.getData('type');
      const elementId = e.dataTransfer.getData('elementId');
      if (!elementId) {
        const element = createElement(type, xPosition, yPosition);
        dispatch(selectElement(element.id));
        dispatch(addElement(element));
      } else {
        dispatch(
          setElementProperties(elementId, {
            xPosition: e.pageX,
            yPosition: e.pageY,
          })
        );
      }
    },
    [dispatch, xPosition, yPosition]
  );

  const select = useCallback(
    (id) => (e) => {
      e.stopPropagation();
      setElementId(id);
    },
    []
  );

  const handleEnterPress = useCallback(
    (e, elementId) => {
      if (e.key === 'Enter') {
        dispatch(selectElement(elementId));
      }
    },
    [dispatch]
  );

  const handleDelete = useCallback(
    (e, id) => {
      if (e.key === 'Backspace') {
        dispatch(removeElement(id, '', ''));
      }
    },
    [dispatch]
  );

  return (
    <Wrapper>
      <MainArea>
        <Container
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          select={select}
          selectedElement={elementId}
          handleEnterPress={handleEnterPress}
          handleDelete={handleDelete}
        />
        {selectedElement && <EditElementModal open={selectedElement} />}
      </MainArea>
      <Sidebar onDragStart={onDragStart} />
    </Wrapper>
  );
};

export default MainAreaContainer;
