import React, { useState, useCallback } from 'react';
import { Form, FieldContainer } from './style';
import { SubmitButton, Input } from '../../../global/GlobalComponents';

const ParagraphForm = ({ selectedProperties, submit }) => {
  const [text, setText] = useState(selectedProperties.text);
  const [xPosition, setXPosition] = useState(selectedProperties.xPosition);
  const [yPosition, setYPosition] = useState(selectedProperties.xPosition);
  const [fontSize, setFontSize] = useState(selectedProperties.fontSize);
  const [fontWeight, setFontWeight] = useState(selectedProperties.fontWeight);

  const handleChange = useCallback((e, cb) => {
    cb(e.target.valueAsNumber || e.target.value);
  }, []);

  return (
    <Form
      onSubmit={(e) =>
        submit(e, { text, xPosition, yPosition, fontSize, fontWeight })
      }
    >
      <FieldContainer>
        <label htmlFor="button-form-text">Text</label>
        <Input
          id="button-form-text"
          value={text}
          onChange={(e) => handleChange(e, setText)}
        />
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="button-form-x">X</label>
        <Input
          type="number"
          id="button-form-x"
          value={xPosition}
          onChange={(e) => handleChange(e, setXPosition)}
        />
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="button-form-y">Y</label>
        <Input
          type="number"
          id="button-form-y"
          value={yPosition}
          onChange={(e) => handleChange(e, setYPosition)}
        />
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="button-form-font-size">Font Size</label>
        <Input
          type="number"
          id="button-form-font-size"
          value={fontSize}
          onChange={(e) => handleChange(e, setFontSize)}
        />
      </FieldContainer>

      <FieldContainer>
        <label htmlFor="button-form-font-weight">Font Weight</label>
        <Input
          type="number"
          id="button-form-font-weight"
          value={fontWeight}
          onChange={(e) => handleChange(e, setFontWeight)}
        />
      </FieldContainer>
      <SubmitButton type="submit">Save Changes</SubmitButton>
    </Form>
  );
};

export default ParagraphForm;
