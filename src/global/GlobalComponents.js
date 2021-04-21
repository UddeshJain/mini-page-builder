import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => (props.reset ? '#9BC1BC' : '#E6B89C')};
  color: white;
  font-size: 14px;
  padding: 8px 16px;
  margin: 8px;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

export const Title = styled.p`
  margin: 8px;
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
`;

export const SubmitButton = styled.button`
  background: #0044c1;
  color: white;
  font-size: 14px;
  padding: 8px 16px;
  margin: 8px;
  /* border-radius: 8px; */
  border: none;
  outline: none;
  width: 140px;
  cursor: pointer;
  :disabled {
    opacity: 0.6;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  margin-right: 8px;
`;

export const InputGroup = styled.div`
  padding: 8px;
  margin-right: 16px;
`;

export const Input = styled.input`
  min-width: 32px;
  /* width: 40px; */
  padding: 6px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
  outline: none;
`;
