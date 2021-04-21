import styled from 'styled-components';

export const BackDropContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.div`
  padding: 0;
  margin: 0;
  width: 28px;
  height: 24px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 2rem;
  color: #cccccc;
  background: transparent;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeadingText = styled.h2`
  color: #000;
  letter-spacing: 0.2px;
`;

export const ModalContainer = styled.div`
  position: fixed;
  padding: 18px 20px;
  border-radius: 10px;
  min-width: 484px;
  background: #fff;
`;
