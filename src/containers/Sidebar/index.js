import React from 'react';
import { Title } from '../../global/GlobalComponents';
import { Wrapper, StyledElementButton, StyledIcon } from './style';
import GridIcon from '../../assets/grip-vertical.svg';

const Sidebar = ({ onDragStart }) => {
  return (
    <Wrapper>
      <Title>BLOCKS</Title>
      <div>
        <StyledElementButton
          draggable
          onDragStart={onDragStart({
            type: 'p',
          })}
        >
          <StyledIcon src={GridIcon} alt="grid-icon" />
          Label
        </StyledElementButton>

        <StyledElementButton
          draggable
          onDragStart={onDragStart({
            type: 'input',
          })}
        >
          <StyledIcon src={GridIcon} alt="grid-icon" />
          Input
        </StyledElementButton>

        <StyledElementButton
          draggable
          onDragStart={onDragStart({
            type: 'button',
          })}
        >
          <StyledIcon src={GridIcon} alt="grid-icon" />
          Button
        </StyledElementButton>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
