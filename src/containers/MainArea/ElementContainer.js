import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getElementsInContainer } from '../../redux/selectors';
import { StyledContainer } from './style';
import Element from './SingleElement';
import { addInitialData } from '../../redux/actions';

const Container = ({
  onDragStart,
  onDragOver,
  onDrop,
  select,
  handleEnterPress,
  selectedElement,
  handleDelete,
}) => {
  const dispatch = useDispatch();
  let children = useSelector(getElementsInContainer);
  let elements = JSON.parse(localStorage.getItem('elements'));

  useEffect(() => {
    if (elements && !children.length) {
      dispatch(addInitialData(elements));
      elements.elements.forEach((obj) => {
        children.push(obj.id);
      });
    }
  }, [children, elements, dispatch]);

  return (
    <StyledContainer
      onDragOver={onDragOver}
      onDrop={onDrop}
      centered={children.length === 0}
    >
      {children.map((child, i) => (
        <Element
          key={child.id}
          elementId={child.id}
          onDragStart={onDragStart}
          select={select}
          tabIndex={i}
          selectedElement={selectedElement}
          handleEnterPress={handleEnterPress}
          handleDelete={handleDelete}
        />
      ))}
    </StyledContainer>
  );
};

export default Container;
