import { v4 as uuidv4 } from 'uuid';

function createElement(type, xPosition, yPosition) {
  return {
    id: uuidv4(),
    type,
    selected: false,
    properties: {
      xPosition,
      yPosition,
    },
  };
}

export default createElement;
