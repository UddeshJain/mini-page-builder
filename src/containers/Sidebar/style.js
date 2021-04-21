import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  min-width: 236px;
  background: white;
  overflow: auto;
  background-color: #2d2d2d;
`;

export const StyledElementButton = styled.div`
  background: white;
  color: #000;
  font-size: 14px;
  padding: 8px 16px;
  border: none;
  margin: 8px;
  outline: none;
  cursor: pointer;
  width: 278px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.img`
  margin-right: 10px;
`;
