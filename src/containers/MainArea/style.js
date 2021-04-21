import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

export const StyledContainer = styled.div`
  display: ${(props) => props.centered && 'flex'};
  text-align: ${(props) => props.centered && 'center'};
  flex: 1;
  margin-bottom: 16px;
  padding: 8px;
  overflow: auto;
  position: relative;
  justify-content: ${(props) => props.centered && 'center'};
  align-items: ${(props) => props.centered && 'center'}; ;
`;

export const StyledButton = styled.button`
  font-size: ${(props) => props.fontSize || 14}px;
  font-weight: ${(props) => props.fontWeight || 400};
  border: ${(props) => (props.selected ? '1px solid #D95409' : null)};
  transform: translate(
    ${(props) => props.xPosition}px,
    ${(props) => props.yPosition}px
  );
  background: #0044c1;
  padding: 8px 16px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  font-size: ${(props) => props.fontSize || 14}px;
  font-weight: ${(props) => props.fontWeight || 400};
  border: ${(props) => (props.selected ? '1px solid #D95409' : null)};
  transform: translate(
    ${(props) => props.xPosition}px,
    ${(props) => props.yPosition}px
  );
  &:focus {
    border: 1px solid #d95409;
    outline: 1px solid #d95409;
  }
`;

export const StyledParagraph = styled.p`
  display: inline-block;
  font-size: ${(props) => props.fontSize || 14}px;
  font-weight: ${(props) => props.fontWeight || 400};
  border: ${(props) => (props.selected ? '1px solid #D95409' : null)};
  transform: translate(
    ${(props) => props.xPosition}px,
    ${(props) => props.yPosition}px
  );
  cursor: pointer;
`;
