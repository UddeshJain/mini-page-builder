import React from 'react';
import { Title } from '../../global/GlobalComponents';
import { Wrapper, StyledElementButton, StyledIcon } from './style';
import elementsList from '../../utils/elementsList';
import GridIcon from '../../assets/grip-vertical.svg';

const Sidebar = ({ onDragStart }) => {
  return (
    <Wrapper>
      <Title>BLOCKS</Title>
      <div>
        {elementsList.map((element) => (
          <StyledElementButton
            key={element.type}
            draggable
            onDragStart={onDragStart({
              type: element.type,
            })}
          >
            <StyledIcon src={GridIcon} alt="grid-icon" />
            {element.title}
          </StyledElementButton>
        ))}
      </div>
    </Wrapper>
  );
};

export default Sidebar;
