import {
  ADD_ELEMENT,
  SELECT_ELEMENT,
  UNSELECT_ELEMENT,
  SET_ELEMENT_PROPERTIES,
  MOVE_CHILD,
  REMOVE_ELEMENT,
  ADD_ELEMENT_AS_CHILD,
  ADD_INITIAL_DATA,
} from './actionTypes';

export const addElement = (element) => ({
  type: ADD_ELEMENT,
  payload: {
    element,
  },
});

export const addElementAsChild = (element, containerId) => ({
  type: ADD_ELEMENT_AS_CHILD,
  payload: {
    element,
    containerId,
  },
});

export const selectElement = (elementId, fromContainerId) => ({
  type: SELECT_ELEMENT,
  payload: {
    elementId,
    fromContainerId,
  },
});

export const unselectElement = () => ({
  type: UNSELECT_ELEMENT,
});

export const setElementProperties = (elementId, properties) => ({
  type: SET_ELEMENT_PROPERTIES,
  payload: {
    elementId,
    properties,
  },
});

export const moveChild = (fromContainerId, containerId, elementId) => ({
  type: MOVE_CHILD,
  payload: {
    fromContainerId,
    containerId,
    elementId,
  },
});

export const removeElement = (elementId) => ({
  type: REMOVE_ELEMENT,
  payload: {
    elementId,
  },
});

export const addInitialData = (data) => ({
  type: ADD_INITIAL_DATA,
  payload: {
    data,
  },
});
