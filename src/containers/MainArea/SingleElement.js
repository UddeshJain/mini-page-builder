import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { getElementById } from '../../redux/selectors';
import { StyledButton, StyledInput, StyledParagraph } from './style';

const Element = ({
  elementId,
  onDragStart,
  select,
  tabIndex,
  handleEnterPress,
  selectedElement,
  handleDelete,
}) => {
  const element = useSelector(getElementById(elementId));

  if (element?.type === 'button') {
    return (
      <StyledButton
        draggable
        tabIndex={tabIndex}
        onDragStart={onDragStart({
          elementId: element.id,
        })}
        onClick={select(element.id)}
        selected={element.id === selectedElement}
        onKeyPress={(e) => handleEnterPress(e, element.id)}
        onKeyDown={(e) => handleDelete(e, element.id)}
        {...element.properties}
      >
        {element.properties.text || 'Button'}
      </StyledButton>
    );
  }

  if (element?.type === 'input') {
    return (
      <StyledInput
        draggable
        tabIndex={tabIndex}
        onDragStart={onDragStart({
          elementId: element.id,
        })}
        onClick={select(element.id)}
        selected={element.id === selectedElement}
        onKeyPress={(e) => handleEnterPress(e, element.id)}
        onKeyDown={(e) => handleDelete(e, element.id)}
        {...element.properties}
      />
    );
  }

  if (element?.type === 'p') {
    return (
      <StyledParagraph
        draggable
        tabIndex={tabIndex}
        onDragStart={onDragStart({
          elementId: element.id,
        })}
        onClick={select(element.id)}
        onKeyPress={(e) => handleEnterPress(e, element.id)}
        onKeyDown={(e) => handleDelete(e, element.id)}
        selected={element.id === selectedElement}
        {...element.properties}
      >
        {element.properties.text || 'Label'}
      </StyledParagraph>
    );
  }
  return null;
};

export default memo(Element);
